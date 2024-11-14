const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

// Controller imports
const {
  createEmployee,
  getAllEmployee,
  getAllName,
  getFilteredEmployees,
} = require("../controllers/Employee");

// Define routes
router.post("/employee", Middleware, createEmployee);
router.get("/employee-get-all", Middleware, getAllEmployee);
router.get("/employee-get-all-name", Middleware, getAllName);
router.get("/employee-get-filter", Middleware, getFilteredEmployees);

module.exports = router;
