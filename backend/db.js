// db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // 👉 Replace with your own MongoDB connection string
    await mongoose.connect("mongodb://127.0.0.1:27017/myapp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1); // Exit app if DB connection fails
  }
};

module.exports = connectDB;
