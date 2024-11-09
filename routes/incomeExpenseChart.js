// routes/dashboard.js

const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

// Controller imports
const IncomeExpenseChartCreate = require("../controllers/Dashboard/IncomeExpenseChart/create");
const IncomeExpenseChartGetAll = require("../controllers/Dashboard/IncomeExpenseChart/getAll");

// Define routes
router.post(
  "/income-expense-chart",
  Middleware,
  IncomeExpenseChartCreate.create
);
router.get(
  "/income-expense-chart-get-all",
  Middleware,
  IncomeExpenseChartGetAll.getAll
);

module.exports = router;
