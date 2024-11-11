const timeSheet = require("../../../models/TimeSheet");

async function getAll(req, res) {
  try {
    // Populate the employeeId with the name field from the Employee model
    const timeSheets = await timeSheet.find().populate("employeeId", "name");

    // Map the response data to include all required fields with employee name
    const timeSheetData = timeSheets.map((timeSheet) => {
      return {
        employeeName: timeSheet.employeeId.name, // Get employee name from populated data
        date: timeSheet.date,
        remark: timeSheet.remark,
        hours: timeSheet.hours,
      };
    });

    return res.status(200).json({
      message: "TimeSheets retrieved successfully!",
      data: timeSheetData,
    });
  } catch (error) {
    console.error("Error retrieving timeSheets:", error);
    return res.status(500).json({
      message: "Failed to retrieve timeSheets.",
      error: error.message,
    });
  }
}

module.exports = getAll;
