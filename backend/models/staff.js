const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "employee",
    },
    
      managerRole: {
      type: String,
        default: "",
      },
    
    role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" }, // Reference
  },
  { timestamps: true }
);

module.exports = mongoose.model("Staff", StaffSchema);
