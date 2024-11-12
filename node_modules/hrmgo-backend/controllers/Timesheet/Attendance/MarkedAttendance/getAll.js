const MarkedAttendance = require("../../../../models/MarkedAttendance");
const moment = require("moment"); // To format the dates

async function getAll(req, res) {
  try {
    // Populate the employeeId with the name field from the Employee model
    const markedAttendance = await MarkedAttendance.find().populate(
      "employeeId",
      "name"
    );

    // Map the response data to include all required fields with employee name and formatted times
    const markedAttendanceData = markedAttendance.map((attendance) => {
      const employeeName = attendance.employeeId.name;

      // Format date and times using moment.js
      const formattedDate = moment(attendance.date).format("MMM D, YYYY");
      const formattedClockIn = moment(attendance.clockIn).format("h:mm A");
      const formattedClockOut = moment(attendance.clockOut).format("h:mm A");
      const formattedLate = moment.utc(attendance.late).format("HH:mm:ss");
      const formattedEarlyLeaving = moment
        .utc(attendance.earlyLeaving)
        .format("HH:mm:ss");
      const formattedOvertime = moment
        .utc(attendance.overtime)
        .format("HH:mm:ss");

      return {
        employeeName,
        date: formattedDate,
        status: attendance.status,
        clockIn: formattedClockIn,
        clockOut: formattedClockOut,
        late: formattedLate,
        earlyLeaving: formattedEarlyLeaving,
        overtime: formattedOvertime,
      };
    });

    return res.status(200).json({
      message: "MarkedAttendance retrieved successfully!",
      data: markedAttendanceData,
    });
  } catch (error) {
    console.error("Error retrieving markedAttendance:", error);
    return res.status(500).json({
      message: "Failed to retrieve marked attendance.",
      error: error.message,
    });
  }
}

module.exports = getAll;
