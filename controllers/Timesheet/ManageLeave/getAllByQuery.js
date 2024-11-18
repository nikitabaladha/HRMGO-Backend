const mongoose = require("mongoose");
const moment = require("moment");
const ManageLeave = require("../../../models/ManageLeave");

async function getAllByQuery(req, res) {
  try {
    const { branch, department, date, type } = req.query;

    // Initialize filters
    const filter = {};
    const dateFilter = {};

    if (branch) filter["branchId"] = new mongoose.Types.ObjectId(branch);
    if (department)
      filter["departmentId"] = new mongoose.Types.ObjectId(department);

    // Apply date filters to the startDate field
    if (date) {
      if (type === "monthly") {
        // Treat `date` as MM-YYYY for monthly filtering
        const startOfMonth = moment(date, "MM-YYYY")
          .startOf("month")
          .toISOString();
        const endOfMonth = moment(date, "MM-YYYY").endOf("month").toISOString();
        dateFilter["startDate"] = { $gte: startOfMonth, $lte: endOfMonth };
      } else if (type === "yearly") {
        // Treat `date` as YYYY for yearly filtering
        const startOfYear = moment(date, "YYYY").startOf("year").toISOString();
        const endOfYear = moment(date, "YYYY").endOf("year").toISOString();
        dateFilter["startDate"] = { $gte: startOfYear, $lte: endOfYear };
      }
    }

    const manageLeave = await ManageLeave.find(dateFilter)
      .populate({
        path: "employeeId",
        select: "id name branchId departmentId",
        match: { ...filter },
        populate: [{ path: "branchId" }, { path: "departmentId" }],
      })
      .lean()
      .exec();

    const manageLeaveData = manageLeave
      .filter((leave) => leave.employeeId != null)
      .map((leave) => ({
        employeeId: leave.employeeId.id,
        //I want this employee id here
        employeeName: leave.employeeId.name,
        branchName: leave.employeeId.branchId.branchName,
        departmentName: leave.employeeId.departmentId.departmentName,
        startDate: moment.utc(leave.startDate).format("MMM D, YYYY"),
        endDate: moment.utc(leave.endDate).format("MMM D, YYYY"),
        totalDays: leave.totalDays,
        leaveType: leave.leaveType,
        reason: leave.reason,
        status: leave.status,
      }));

    return res.status(200).json({
      message: "Manage leave retrieved successfully!",
      data: manageLeaveData,
    });
  } catch (error) {
    console.error("Error retrieving manage leave:", error);
    return res.status(500).json({
      message: "Failed to retrieve manage leave.",
      error: error.message,
    });
  }
}

module.exports = getAllByQuery;
