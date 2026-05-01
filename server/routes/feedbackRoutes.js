const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const auth = require("../middleware/auth");

// ⭐ ADD FEEDBACK (PROTECTED)
router.post("/", auth, async (req, res) => {
  try {
    const { rating, message } = req.body;

    // user token से आएगा
    const userId = req.user.id;

    // validation
    if (rating === undefined || rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: "Valid rating (1-5) required",
      });
    }

    const feedback = await Feedback.create({
      user: userId,
      rating,
      message,
    });

    res.status(201).json({
      success: true,
      feedback,
    });

  } catch (err) {
    console.error("Feedback error:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});


// ⭐ GET ALL FEEDBACK (HOME PAGE)
router.get("/", async (req, res) => {
  try {
    const data = await Feedback.find()
      .populate("user", "name phone")
      .sort({ createdAt: -1 });

    res.json(data);
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to fetch feedback",
    });
  }
});

module.exports = router;