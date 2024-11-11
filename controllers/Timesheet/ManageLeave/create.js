const ManageLeaveValidator = require("../../../validators/Timesheet/ManageLeaveValidator");

const ManageLeave = require("../../../models/ManageLeave");

async function create(req, res) {
  try {
    const { error } = ManageLeaveValidator.validate(req.body);

    if (error?.details?.length) {
      const errorMessages = error.details.map((err) => err.message).join(", ");
      return res.status(400).json({ message: errorMessages });
    }

    const {
      employeeId,
      leaveType,
      appliedOn,
      startDate,
      endDate,
      totalDays,
      reason,
      status,
    } = req.body;

    // Create a new employee instance
    const newManageLeave = new ManageLeave({
      employeeId,
      leaveType,
      appliedOn,
      startDate,
      endDate,
      totalDays,
      reason,
      status,
    });

    // Save the employee to the database
    await newManageLeave.save();

    return res.status(201).json({
      message: "ManageLeave created successfully!",
      employee: newManageLeave,
    });
  } catch (error) {
    console.error("Error creating employee:", error);
    return res.status(500).json({
      message: "Failed to create employee.",
      error: error.message,
    });
  }
}

module.exports = create;
