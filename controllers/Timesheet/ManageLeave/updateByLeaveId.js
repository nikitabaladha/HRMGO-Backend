const ManageLeaveValidator = require("../../../validators/Timesheet/ManageLeaveValidator");
const ManageLeave = require("../../../models/ManageLeave");

async function updateByLeaveId(req, res) {
  try {
    // Extract ID from request parameters
    const { id } = req.params;

    // Validate the incoming data
    const { error } = ManageLeaveValidator.validateUpdate(req.body);
    if (error?.details?.length) {
      const errorMessages = error.details.map((err) => err.message).join(", ");
      return res.status(400).json({ message: errorMessages });
    }

    // Extract data from request body (excluding employeeId)
    const { leaveType, appliedOn, startDate, endDate, totalDays, reason } =
      req.body;

    // Check if the leave entry exists
    const existingLeave = await ManageLeave.findById(id);
    if (!existingLeave) {
      return res.status(404).json({
        message: "ManageLeave entry not found.",
        hasError: true,
      });
    }

    // Check for conflicts with other leave entries for the same employee and dates
    const conflictingLeave = await ManageLeave.findOne({
      _id: { $ne: id }, // Exclude the current leave entry
      employeeId: existingLeave.employeeId,
      startDate,
      endDate,
    });

    if (conflictingLeave) {
      return res.status(400).json({
        message: "A leave already exists for the specified dates.",
        hasError: true,
      });
    }

    // Update the leave entry (excluding employeeId)
    existingLeave.leaveType = leaveType;
    existingLeave.appliedOn = appliedOn;
    existingLeave.startDate = startDate;
    existingLeave.endDate = endDate;
    existingLeave.totalDays = totalDays;
    existingLeave.reason = reason;

    // Save the updated leave entry to the database
    await existingLeave.save();

    return res.status(200).json({
      message: "ManageLeave updated successfully!",
      leave: existingLeave,
      hasError: false,
    });
  } catch (error) {
    console.error("Error updating ManageLeave:", error);
    return res.status(500).json({
      message: "Failed to update ManageLeave.",
      error: error.message,
    });
  }
}

module.exports = updateByLeaveId;
