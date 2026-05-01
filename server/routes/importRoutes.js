const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { importCustomersFromFile } = require("../utils/customerImport");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const result = await importCustomersFromFile(req.file.path, req.file.originalname);

    try {
      fs.unlinkSync(req.file.path);
    } catch {}

    res.json({
      success: true,
      message: "Upload success",
      count: result.totalChanged,
      rows: result.rows,
      valid: result.valid,
      inserted: result.inserted,
      updated: result.updated,
    });
  } catch (err) {
    if (req.file) {
      try {
        fs.unlinkSync(req.file.path);
      } catch {}
    }

    console.error("Upload error:", err.message);
    res.status(500).json({
      success: false,
      message: err.message || "Upload failed",
    });
  }
});

module.exports = router;
