const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");
const { toCustomerView } = require("../utils/customerView");

router.get("/summary", async (req, res) => {
  try {
    const customers = await Customer.find().select("paidMonths durationMonths status").lean();
    const totalUsers = customers.length;
    const completed = customers.filter(
      (customer) => toCustomerView(customer).status === "Completed"
    ).length;
    const running = totalUsers - completed;

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

    res.json(data.map(toCustomerView));
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

    res.json(toCustomerView(user));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
