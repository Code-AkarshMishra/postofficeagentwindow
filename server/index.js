const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

app.use("/api/login", require("./routes/loginRoute"));
app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/admin", require("./routes/adminAuth"));
app.use("/api/admin/control", require("./routes/adminControl"));

app.use("/api/customers", require("./routes/customerRoutes"));
app.use("/api/import", require("./routes/importRoutes"));
app.use("/api/feedback", require("./routes/feedbackRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("DB Error:", err);
    process.exit(1);
  }
}

startServer();
