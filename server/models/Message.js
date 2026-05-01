// models/Message.js

const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  customerId: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", messageSchema);