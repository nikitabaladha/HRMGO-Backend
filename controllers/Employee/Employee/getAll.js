const Employee = require("../../../models/Employee");

async function getAll(req, res) {
  try {
    // Fetch all employees
    const employees = await Employee.find();

    if (employees.length === 0) {
      return res.status(404).json({
        hasError: true,
        message: "No Employee found",
      });
    }

    return res.status(200).json({
      hasError: false,
      message: "Employees fetched successfully",
      data: employees,
    });
  } catch (error) {
    console.error("Error fetching employees:", error.message);
    return res.status(500).json({
      hasError: true,
      message: "Server error",
    });
  }
}

module.exports = getAll;
