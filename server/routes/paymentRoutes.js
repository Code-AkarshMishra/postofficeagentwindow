const express = require("express");
const Customer = require("../models/Customer");
const Payment = require("../models/Payment");
const auth = require("../middleware/auth");

const router = express.Router();

// ➕ ADD PAYMENT
router.post("/:id", auth, async (req, res) => {
  const c = await Customer.findById(req.params.id);

  c.paidMonths += 1;
  c.totalAmount += c.monthlyAmount;

  c.status =
    c.paidMonths >= c.durationMonths ? "Completed" : "Running";

  await c.save();

  // 🧾 history save
  await Payment.create({
    customerId: c._id,
    amount: c.monthlyAmount,
  });

  res.json({ success: true });
});

// 📜 GET PAYMENT HISTORY
router.get("/:id", auth, async (req, res) => {
  const payments = await Payment.find({
    customerId: req.params.id,
  }).sort({ createdAt: -1 });

  res.json(payments);
});

module.exports = router;