// server.js
const express = require("express");
const connectDB = require("./db"); // import DB config
const staffRoutes = require("./routes/staff");
const RoleRoutes = require("./routes/role");
const app = express();
const cors = require("cors"); // ✅ import cors

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" })); // ✅ allow Angular frontend

// Connect Database
connectDB();

app.use("/staff", staffRoutes);
app.use("/roles", RoleRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
