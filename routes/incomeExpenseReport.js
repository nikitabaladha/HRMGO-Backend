// routes/dashboard.js

const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

// Controller imports
const IncomeExpenseReportCreate = require("../controllers/Dashboard/IncomeExpenseReport/create");
const IncomeExpenseReportGetAll = require("../controllers/Dashboard/IncomeExpenseReport/getAll");

// Define routes
router.post(
  "/income-expense-report",
  Middleware,
  IncomeExpenseReportCreate.create
);
router.get(
  "/income-expense-report-get-all",
  Middleware,
  IncomeExpenseReportGetAll.getAll
);

module.exports = router;
