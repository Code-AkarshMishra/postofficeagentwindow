// routes/messageRoutes.js

const router = require("express").Router();
const Message = require("../models/Message");

router.post("/", async (req, res) => {
  const { customerId, message } = req.body;

  const msg = await Message.create({ customerId, message });
  res.json(msg);
});

module.exports = router;