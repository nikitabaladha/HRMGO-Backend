const Joi = require("joi");

const IncomeExpenseReportValidator = Joi.object({
  title: Joi.string().required().default("Income vs Expense Summary"),
  duration: Joi.object({
    start: Joi.date().required(),
    end: Joi.date().required().greater(Joi.ref("start")),
  }).required(),
  totalIncome: Joi.number().required().min(0),
  totalExpense: Joi.number().required().min(0),
});

module.exports = IncomeExpenseReportValidator;
