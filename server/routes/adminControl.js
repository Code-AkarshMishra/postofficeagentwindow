const router = require("express").Router();
const Customer = require("../models/Customer");
const { toCustomerView } = require("../utils/customerView");
const { getCustomerProgress } = require("../utils/maturity");

// 🔍 search by account
router.get("/search/:phone", async (req, res) => {
  const user = await Customer.findOne({ phone: req.params.phone });
  res.json(user ? toCustomerView(user) : null);
});

// ✏️ update customer
router.put("/update/:id", async (req, res) => {
  const update = { ...req.body };
  const paidMonths = update.paidMonths === undefined ? undefined : Number(update.paidMonths);
  const dueDate = update.dueDate;

  if (paidMonths !== undefined || dueDate) {
    const existing = await Customer.findById(req.params.id);
    if (!existing) {
      return res.status(404).json({ error: "Customer not found" });
    }

    const nextPaidMonths = paidMonths ?? existing.paidMonths;
    const nextDueDate = dueDate ?? existing.dueDate ?? existing.maturityDate;
    const progress = getCustomerProgress(nextPaidMonths, nextDueDate);

    update.durationMonths = progress.durationMonths;
    update.dueDate = nextDueDate;
    update.maturityDate = progress.maturityDate;
    update.status = progress.status;
    update.paidMonths = nextPaidMonths;
  }

  const updated = await Customer.findByIdAndUpdate(
    req.params.id,
    update,
    { new: true }
  );
  if (!updated) {
    return res.status(404).json({ error: "Customer not found" });
  }

  res.json(toCustomerView(updated));
});

// 🧹 delete all customers
router.delete("/clear", async (req, res) => {
  await Customer.deleteMany({});
  res.json({ success: true });
});

module.exports = router;
