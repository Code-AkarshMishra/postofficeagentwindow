require("dotenv").config();
const mongoose = require("mongoose");
const Customer = require("./models/Customer");

async function run() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");

    await Customer.deleteMany();
    console.log("All customers deleted");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();