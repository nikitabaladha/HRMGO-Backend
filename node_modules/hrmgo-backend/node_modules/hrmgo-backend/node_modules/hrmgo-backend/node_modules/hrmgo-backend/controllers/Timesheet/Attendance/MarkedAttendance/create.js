// controllers/MarkedAttendance/create.js
const MarkedAttendance = require("../../../../models/MarkedAttendance");
const MarkedAttendanceValidator = require("../../../../validators/Timesheet/MarkedAttendance");

async function create(req, res) {
  try {
    // Validate the MarkedAttendance data using Joi schema
    const { error, value } = MarkedAttendanceValidator.validate(req.body);

    if (error?.details?.length) {
      const errorMessages = error.details.map((err) => err.message).join(", ");
      return res.status(400).json({ message: errorMessages });
    }

    // Create a new MarkedAttendance with validated data
    const newMarkedAttendance = new MarkedAttendance({
      employeeId: value.employeeId,
      date: value.date,
      status: value.status,
      clockIn: value.clockIn,
      clockOut: value.clockOut,
      late: value.late,
      earlyLeaving: value.earlyLeaving,
      overtime: value.overtime,
    });

    // Save the MarkedAttendance to the database
    await newMarkedAttendance.save();

    return res.status(201).json({
      hasError: false,
      message: "MarkedAttendance created successfully",
      data: newMarkedAttendance,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Server error" });
  }
}

module.exports = create;
