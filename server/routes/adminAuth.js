const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const Admin = require("../models/Admin");
const Customer = require("../models/Customer");

const { signToken } = require("../utils/jwt");
const auth = require("../middleware/auth");


// ===============================
// 🔐 ADMIN LOGIN
// ===============================
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const ok = await bcrypt.compare(password, admin.password);

    if (!ok) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const token = signToken({
      id: admin._id,
      role: "admin",
      username: admin.username,
    });

    res.json({
      success: true,
      token,
    });

  } catch (err) {
    console.error("Admin login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// ===============================
// 🔐 CHANGE ADMIN PASSWORD
// ===============================
router.post("/change-password", auth, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Forbidden" });
    }

    const { newPassword } = req.body;

    if (!newPassword || newPassword.length < 4) {
      return res.status(400).json({
        message: "Password must be at least 4 characters",
      });
    }

    const hash = await bcrypt.hash(newPassword, 10);

    // ✅ FIXED LINE
    await Admin.findByIdAndUpdate(req.user.id, {
      password: hash,
    });

    res.json({
      success: true,
      message: "Admin password updated",
    });

  } catch (err) {
    console.error("Admin password change error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// ===============================
// 👤 CHANGE USER PASSWORD
// ===============================
router.post("/update-user-password", auth, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Forbidden" });
    }

    const { userId, newPassword } = req.body;

    if (!userId || !newPassword) {
      return res.status(400).json({
        message: "Missing userId or password",
      });
    }

    if (newPassword.length < 4) {
      return res.status(400).json({
        message: "Password too short",
      });
    }

    const hash = await bcrypt.hash(newPassword, 10);

    await Customer.findByIdAndUpdate(userId, {
      password: hash,
    });

    res.json({
      success: true,
      message: "User password updated",
    });

  } catch (err) {
    console.error("User password update error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;