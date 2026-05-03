const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const xlsx = require("xlsx");
const Customer = require("../models/Customer");
const { getCustomerProgress } = require("./maturity");

const BATCH_SIZE = 100;

function normalizeKey(key) {
  return String(key).toLowerCase().replace(/[^a-z0-9]/g, "");
}

function pick(row, keys) {
  const normalized = Object.fromEntries(
    Object.entries(row).map(([key, value]) => [normalizeKey(key), value])
  );

  for (const key of keys) {
    const value = normalized[normalizeKey(key)];
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      return value;
    }
  }

  return undefined;
}

function parseDate(value) {
  if (!value) return null;

  if (value instanceof Date) return value;

  if (typeof value === "number") {
    const parsed = xlsx.SSF.parse_date_code(value);
    if (!parsed) return null;
    return new Date(Date.UTC(parsed.y, parsed.m - 1, parsed.d));
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function readRows(filePath, sourceName = filePath) {
  const extension = path.extname(sourceName).toLowerCase();

  if (extension === ".json") {
    const rows = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return Array.isArray(rows) ? rows : [];
  }

  if (extension === ".xlsx" || extension === ".xls") {
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    return xlsx.utils.sheet_to_json(sheet);
  }

  throw new Error("Only .json, .xlsx, and .xls files are supported");
}

function normalizeCustomer(row) {
  const accountNo = String(
    pick(row, ["accountNo", "account", "accountNumber", "phone", "mobile"]) || ""
  ).trim();
  const paidMonths = Number(pick(row, ["monthPaid", "paidMonths", "paid", "monthsPaid"]) || 0);
  const monthlyAmount = Number(pick(row, ["amount", "monthlyAmount", "deposit", "installment"]) || 0);
  const dueDate = pick(row, ["dueDate", "maturityDate", "date"]);
  const parsedDueDate = parseDate(dueDate);
  const progress = getCustomerProgress(paidMonths, parsedDueDate);

  if (!accountNo || accountNo.length < 4) return null;

  return {
    name: String(pick(row, ["name", "customerName", "holderName"]) || "Unknown").trim(),
    phone: accountNo,
    rawPassword: accountNo.slice(-4),
    scheme: String(pick(row, ["scheme"]) || "RD").trim(),
    monthlyAmount,
    paidMonths,
    durationMonths: progress.durationMonths,
    totalAmount: paidMonths * monthlyAmount,
    dueDate: parsedDueDate,
    maturityDate: progress.maturityDate,
    status: progress.status,
  };
}

async function buildOperations(rows) {
  return Promise.all(
    rows.map(async (row) => {
      const customer = normalizeCustomer(row);
      if (!customer) return null;

      const { rawPassword, ...customerData } = customer;
      const password = await bcrypt.hash(rawPassword, 10);

      return {
        updateOne: {
          filter: { phone: customerData.phone },
          update: {
            $set: {
              ...customerData,
              password,
            },
          },
          upsert: true,
        },
      };
    })
  );
}

async function importCustomersFromRows(rows) {
  let processed = 0;
  let valid = 0;
  let inserted = 0;
  let updated = 0;

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch = rows.slice(i, i + BATCH_SIZE);
    const operations = (await buildOperations(batch)).filter(Boolean);

    processed += batch.length;
    valid += operations.length;

    if (!operations.length) continue;

    const result = await Customer.bulkWrite(operations, { ordered: false });
    inserted += result.upsertedCount || 0;
    updated += result.modifiedCount || 0;
  }

  return {
    processed,
    valid,
    inserted,
    updated,
    totalChanged: inserted + updated,
  };
}

async function importCustomersFromFile(filePath, sourceName = filePath) {
  const rows = readRows(filePath, sourceName);
  const result = await importCustomersFromRows(rows);

  return {
    file: sourceName,
    rows: rows.length,
    ...result,
  };
}

module.exports = {
  importCustomersFromFile,
  importCustomersFromRows,
  normalizeCustomer,
  readRows,
};
