// HRMGO-Backend/controllers/Employee/Employee/getFilteredEmployees.js

const Employee = require("../../../models/Employee");

async function getFilteredEmployees(req, res) {
  const { branchId, departmentId } = req.query;
  const query = {};

  if (branchId) {
    query.branchId = branchId;
  }

  if (departmentId) {
    query.departmentId = departmentId;
  }

  try {
    const employees = await Employee.find(query)
      .populate("branchId", "branchName")
      .populate("departmentId", "departmentName");

    const employeeData = employees.map((employee) => ({
      _id: employee._id,
      id: employee.id,
      name: employee.name,
      email: employee.email,
      branchName: employee.branchId?.branchName,
      departmentName: employee.departmentId?.departmentName,
      designation: employee.designation,
      joiningDate: employee.joiningDate,
      __v: employee.__v,
    }));

    return res.status(200).json({
      message: "Filtered employees retrieved successfully!",
      data: employeeData,
      hasError: false,
    });
  } catch (error) {
    console.error("Error retrieving filtered employees:", error);
    return res.status(500).json({
      message: "Failed to retrieve filtered employees.",
      error: error.message,
    });
  }
}

module.exports = getFilteredEmployees;
