const mongoose = require("mongoose");

// Department Schema
const DepartmentSchema = new mongoose.Schema({
  departmentName: {
    type: String,
    required: true,
  },
  branchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch", // Reference to the Branch collection
    required: true,
  },
});

// Department Model
const Department = mongoose.model("Department", DepartmentSchema);
module.exports = Department;
