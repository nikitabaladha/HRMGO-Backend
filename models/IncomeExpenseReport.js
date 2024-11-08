const mongoose = require("mongoose");

const IncomeExpenseReportSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },
    title: {
      type: String,
      required: true,
      default: "Income vs Expense Summary",
    },
    duration: {
      start: {
        type: Date,
        required: true,
      },
      end: {
        type: Date,
        required: true,
      },
    },
    totalIncome: {
      type: Number,
      required: true,
    },
    totalExpense: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const IncomeExpenseReport = mongoose.model(
  "IncomeExpenseReport",
  IncomeExpenseReportSchema
);

module.exports = IncomeExpenseReport;
