const ManageLeave = require("../../../models/ManageLeave");

async function getAll(req, res) {
  try {
    // Populate the employeeId with the name field from the Employee model
    const manageLeaves = await ManageLeave.find().populate(
      "employeeId",
      "name"
    );

    // Map the response data to include all required fields with employee name
    const manageLeaveData = manageLeaves.map((manageLeave) => {
      return {
        employeeName: manageLeave.employeeId.name,
        leaveType: manageLeave.leaveType,
        appliedOn: manageLeave.appliedOn,
        startDate: manageLeave.startDate,
        endDate: manageLeave.endDate,
        totalDays: manageLeave.totalDays,
        reason: manageLeave.reason,
        status: manageLeave.status,
      };
    });

    return res.status(200).json({
      message: "ManageLeaves retrieved successfully!",
      data: manageLeaveData,
    });
  } catch (error) {
    console.error("Error retrieving manageLeaves:", error);
    return res.status(500).json({
      message: "Failed to retrieve manage Leaves.",
      error: error.message,
    });
  }
}

module.exports = getAll;
