const router = require("express").Router();
const Customer = require("../models/Customer");

// 🔍 search by account
router.get("/search/:phone", async (req, res) => {
  const user = await Customer.findOne({ phone: req.params.phone });
  res.json(user);
});

// ✏️ update customer
router.put("/update/:id", async (req, res) => {
  const updated = await Customer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// 🧹 delete all customers
router.delete("/clear", async (req, res) => {
  await Customer.deleteMany({});
  res.json({ success: true });
});

module.exports = router;