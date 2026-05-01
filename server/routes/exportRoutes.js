const express = require("express");
const Customer = require("../models/Customer");
const xlsx = require("xlsx");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const customers = await Customer.find().lean();

  const worksheet = xlsx.utils.json_to_sheet(customers);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, "Customers");

  const buffer = xlsx.write(workbook, { type: "buffer", bookType: "xlsx" });

  res.setHeader(
    "Content-Disposition",
    "attachment; filename=customers.xlsx"
  );
  res.send(buffer);
});

module.exports = router;