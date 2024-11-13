const mongoose = require("mongoose");
const MarkedAttendance = require("../../../../models/MarkedAttendance");
const moment = require("moment");

async function getAll(req, res) {
  try {
    // Extract query parameters
    const { branch, department, date, type } = req.query;

    // Build query filter object
    const filter = {};

    // Filter by branch if provided
    if (branch) filter["branchId"] = new mongoose.Types.ObjectId(branch);

    // Filter by department if provided
    if (department)
      filter["departmentId"] = new mongoose.Types.ObjectId(department);

    let dateFilter = {};

    if (date) {
      const dateFilterFor = type === "Daily" ? "day" : "month";
      const startOfMonth = moment(date).startOf(dateFilterFor).toISOString();
      const endOfMonth = moment(date).endOf(dateFilterFor).toISOString();
      dateFilter.date = { $gte: startOfMonth, $lte: endOfMonth };
    }

    // Populate the employee details with branch and department
    const markedAttendance = await MarkedAttendance.find(dateFilter)
      .populate({
        path: "employeeId", // Populate the employeeId field
        select: "name branchId departmentId", // Fields to select from the employee document
        match: { ...filter },
        populate: [
          { path: "branchId" }, // Populate the branchId field
          { path: "departmentId" }, // Populate the departmentId field
        ],
      })
      .lean()
      .exec();

    // Map the response data to include all required fields with employee details
    const markedAttendanceData = markedAttendance
      .filter((attendance) => attendance.employeeId != null)
      .map((attendance) => {
        const employeeName = attendance.employeeId.name;
        const branchName = attendance.employeeId.branchId.branchName;
        const departmentName =
          attendance.employeeId.departmentId.departmentName;

        // Format date and times using moment.js with UTC to ensure consistency
        const formattedDate = moment.utc(attendance.date).format("MMM D, YYYY");
        const formattedClockIn = moment
          .utc(attendance.clockIn)
          .format("h:mm A");
        const formattedClockOut = moment
          .utc(attendance.clockOut)
          .format("h:mm A");
        const formattedLate = moment.utc(attendance.late).format("HH:mm:ss");
        const formattedEarlyLeaving = moment
          .utc(attendance.earlyLeaving)
          .format("HH:mm:ss");
        const formattedOvertime = moment
          .utc(attendance.overtime)
          .format("HH:mm:ss");

        return {
          employeeName,
          branchName,
          departmentName,
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
      message: "Marked Attendance retrieved successfully!",
      data: markedAttendanceData,
    });
  } catch (error) {
    console.error("Error retrieving marked attendance:", error);
    return res.status(500).json({
      message: "Failed to retrieve marked attendance.",
      error: error.message,
    });
  }
}

module.exports = getAll;
