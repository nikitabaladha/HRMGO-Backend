const MarkedAttendance = require("../../../../models/MarkedAttendance");
const MarkedAttendanceValidator = require("../../../../validators/Timesheet/MarkedAttendance");

async function create(req, res) {
  try {
    const records = Array.isArray(req.body) ? req.body : [req.body];
    const createdRecords = [];

    for (const record of records) {
      const { error, value } = MarkedAttendanceValidator.validate(record);

      if (error?.details?.length) {
        const errorMessages = error.details
          .map((err) => err.message)
          .join(", ");
        return res.status(400).json({ message: errorMessages });
      }

      const {
        employeeId,
        date,
        status,
        clockIn,
        clockOut,
        late,
        earlyLeaving,
        overtime,
      } = value;

      const newMarkedAttendance = new MarkedAttendance({
        employeeId,
        date: new Date(date), // Convert string to date if needed
        status,
        clockIn: clockIn ? new Date(clockIn) : null,
        clockOut: clockOut ? new Date(clockOut) : null,
        late: late ? new Date(late) : null,
        earlyLeaving: earlyLeaving ? new Date(earlyLeaving) : null,
        overtime: overtime ? new Date(overtime) : null,
      });

      await newMarkedAttendance.save();
      createdRecords.push(newMarkedAttendance);
    }

    return res.status(201).json({
      hasError: false,
      message: "MarkedAttendance record(s) created successfully",
      data: createdRecords,
    });
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
}

module.exports = create;
