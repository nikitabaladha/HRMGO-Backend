const IncomeExpenseReport = require("../../../models/IncomeExpenseReport");

async function getAll(req, res) {
  try {
    // Extract userId from the logged-in user's token
    const userId = req.user.id;

    // Fetch all IncomeExpenseReports for the logged-in user (use userId to filter)
    const incomeExpenseReports = await IncomeExpenseReport.find({ userId });

    if (!incomeExpenseReports || incomeExpenseReports.length === 0) {
      return res.status(404).json({
        hasError: true,
        message: "No IncomeExpenseReport found for this user",
      });
    }

    return res.status(200).json({
      hasError: false,
      message: "IncomeExpenseReports fetched successfully",
      data: incomeExpenseReports,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Server error" });
  }
}

module.exports = { getAll };
