require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log("Mongo connected");

  await Admin.deleteMany({});

  const hashedPassword = await bcrypt.hash("123456", 10);

  await Admin.create({
    username: "admin",
    password: hashedPassword,
  });

  console.log("Admin created");
  process.exit();
});