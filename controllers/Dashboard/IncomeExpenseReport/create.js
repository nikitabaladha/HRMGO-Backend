// controllers/IncomeExpenseReport/create.js
const IncomeExpenseReport = require("../../../models/IncomeExpenseReport");
const IncomeExpenseReportValidator = require("../../../validators/DashboardValidators/IncomeExpenseReportValidator");

async function create(req, res) {
  try {
    const { title, totalIncome, totalExpense, duration } = req.body;
    const userId = req.user.id; // Assuming `user` is added to `req` through middleware (e.g., auth middleware)

    // Validate the IncomeExpenseReport data using the validator
    const { error } = IncomeExpenseReportValidator.validate(req.body);

    if (error?.details?.length) {
      const errorMessages = error.details.map((err) => err.message).join(", ");
      return res.status(400).json({ hasError: true, message: errorMessages });
    }

    // Create a new IncomeExpenseReport with the validated data
    const newIncomeExpenseReport = new IncomeExpenseReport({
      title,
      totalIncome,
      totalExpense,
      userId,
      duration: {
        start: duration.start,
        end: duration.end,
      },
    });

    // Save the IncomeExpenseReport to the database
    await newIncomeExpenseReport.save();

    return res.status(201).json({
      hasError: false,
      message: "IncomeExpenseReport created successfully",
      data: newIncomeExpenseReport,
    });
  } catch (error) {
    console.error("Error creating IncomeExpenseReport:", error.message);
    return res.status(500).json({ hasError: true, message: "Server error" });
  }
}

module.exports = { create };
