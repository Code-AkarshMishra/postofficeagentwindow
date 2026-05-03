const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    scheme: {
      type: String,
      default: "RD",
    },

    monthlyAmount: {
      type: Number,
      default: 0,
    },

    paidMonths: {
      type: Number,
      default: 0,
    },

    durationMonths: {
      type: Number,
      default: 60,
    },

    totalAmount: {
      type: Number,
      default: 0,
    },

    dueDate: {
      type: Date,
    },

    maturityDate: {
      type: Date,
    },

    status: {
      type: String,
      default: "Running",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
