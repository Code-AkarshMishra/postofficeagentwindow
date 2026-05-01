const router = require("express").Router();
const Customer = require("../models/Customer");
const bcrypt = require("bcryptjs");

router.post("/login", async (req, res) => {
  try {
    const { phone, password } = req.body;

    const user = await Customer.findOne({ phone });

    if (!user) return res.status(404).json("User not found");

    const last4 = user.phone.slice(-4);

    if (password !== last4) {
      return res.status(400).json("Wrong password");
    }

    res.json(user);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;