// const mongoose = require("mongoose");

// const EmployeeSchema = new mongoose.Schema({
//   id: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   branchId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Branch",
//     required: true,
//   },
//   departmentId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Department", // Reference to the Department collection
//     required: true,
//   },
//   designation: {
//     type: String,
//     required: true,
//   },
//   joiningDate: {
//     type: Date,
//     required: true,
//   },
// });

// // Pre-save hook to generate employee ID (EMP0000001, EMP0000002, etc.)
// EmployeeSchema.pre("save", async function (next) {
//   if (this.isNew) {
//     try {
//       // Find the last employee document and extract the last `id`
//       const lastEmployee = await mongoose
//         .model("Employee")
//         .findOne()
//         .sort({ id: -1 })
//         .limit(1);
//       const lastEmployeeId = lastEmployee ? lastEmployee.id : "EMP0000000"; // Default to EMP0000000 if no employees exist
//       const nextEmployeeIdNumber =
//         parseInt(lastEmployeeId.replace("EMP", "")) + 1; // Extract number and increment it
//       const nextEmployeeId = `EMP${nextEmployeeIdNumber
//         .toString()
//         .padStart(7, "0")}`; // Generate the next ID with 7 digits

//       this.id = nextEmployeeId; // Set the generated employee ID
//     } catch (error) {
//       console.error("Error generating employee ID:", error);
//     }
//   }
//   next();
// });

// const Employee = mongoose.model("Employee", EmployeeSchema);
// module.exports = Employee;

const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  branchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch",
    required: true,
  },
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department", // Reference to the Department collection
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true,
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
