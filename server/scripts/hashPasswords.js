const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Customer = require("../models/Customer");

async function run() {
  await mongoose.connect(process.env.MONGO_URI);

  const users = await Customer.find();

  for (let u of users) {
    // अगर already hashed है तो skip
    if (u.password && u.password.startsWith("$2b$")) continue;

    const hashed = await bcrypt.hash(u.password, 10);
    u.password = hashed;
    await u.save();

    console.log(`✔ Updated: ${u.phone}`);
  }

  console.log("🎉 All passwords migrated");
  process.exit();
}

run();