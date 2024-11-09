// HRMGO-Backend\controllers\Dashboard\IncomeExpenseChart\getAll.js

const IncomeExpenseChart = require("../../../models/IncomeExpenseChart");

async function getAll(req, res) {
  try {
    const userId = req.user.id;

    // Fetch IncomeExpenseCharts for the user and sort by categories date
    const incomeExpenseCharts = await IncomeExpenseChart.find({ userId }).sort({
      categories: 1,
    });

    if (!incomeExpenseCharts.length) {
      return res.status(404).json({
        hasError: true,
        message: "No Income Expense Chart found for this user",
      });
    }

    // Prepare data for the frontend chart
    const categories = incomeExpenseCharts.map((item) =>
      new Date(item.categories).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    );
    const incomeData = incomeExpenseCharts.map((item) => item.incomeData);
    const expenseData = incomeExpenseCharts.map((item) => item.expenseData);

    return res.status(200).json({
      hasError: false,
      message: "Income Expense Charts fetched successfully",
      data: { categories, incomeData, expenseData },
    });
  } catch (error) {
    console.error("Error fetching IncomeExpenseCharts:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
}

module.exports = { getAll };
