const express = require("express");
const Staff = require("../models/staff");
const router = express.Router();

// POST - Add Staff
router.post("/", async (req, res) => {
  
  try {
    const staff = new Staff(req.body);
    await staff.save();
    res.status(201).json(staff);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - All Staff with role name
router.get("/", async (req, res) => {
  try {
    const staffList = await Staff.find().populate("role", "name"); // populate role field with name only
    res.json(staffList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// GET staff by ID
router.get("/:id", async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id).populate("role", "name");
    if (!staff) return res.status(404).json({ msg: "Staff not found" });
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// PUT - Update staff by ID
router.put("/:id", async (req, res) => {
  try {
    const { name, email, phone, role } = req.body;
    const staff = await Staff.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, role },
      { new: true }
    ).populate("role", "name"); // populate updated staff
    if (!staff) return res.status(404).json({ message: "Staff not found" });
    res.json({ message: "Staff updated successfully", staff });
  } catch (error) {
    console.error("Error updating staff:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const staff = await Staff.findByIdAndDelete(req.params.id);
    if (!staff) return res.status(404).json({ message: "Staff not found" });
    res.json({ message: "Staff deleted successfully", staff });
  } catch (error) {
    console.error("Error deleting staff:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
