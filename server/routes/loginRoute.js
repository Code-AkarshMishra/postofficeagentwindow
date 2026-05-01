const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Customer = require("../models/Customer");
const { signToken } = require("../utils/jwt");

router.post("/", async (req, res) => {
  try {
    let { phone, password } = req.body;

    if (!phone || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    phone = String(phone).trim();
    password = String(password).trim();

    const user = await Customer.findOne({ phone });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
      return res.status(401).json({ message: "Invalid details" });
    }

    const token = signToken({
      id: user._id,
      role: "customer",
    });

    const safeUser = user.toObject();
    delete safeUser.password;

    res.json({
      success: true,
      token,
      user: safeUser,
    });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
