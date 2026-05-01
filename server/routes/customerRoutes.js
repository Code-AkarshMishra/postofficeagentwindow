const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

router.get("/summary", async (req, res) => {
  try {
    const [totalUsers, running, completed] = await Promise.all([
      Customer.countDocuments(),
      Customer.countDocuments({ status: "Running" }),
      Customer.countDocuments({ status: "Completed" }),
    ]);

    res.json({
      totalUsers,
      running,
      completed,
    });
  } catch (err) {
    console.error("Customer summary error:", err.message);
    res.status(500).json({ error: "Failed to fetch customer summary" });
  }
});

// ✅ GET ALL CUSTOMERS
router.get("/", async (req, res) => {
  try {
    const data = await Customer.find()
      .select("-password")
      .sort({ name: 1 })
      .lean();

    res.json(data);
  } catch (err) {
    console.error("Customers fetch error:", err);
    res.status(500).json({ error: "Failed to fetch customers" });
  }
});

// 🔥 GET SINGLE CUSTOMER USING PHONE (NOT _id)
router.get("/:phone", async (req, res) => {
  try {
    const user = await Customer.findOne({ phone: req.params.phone });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
