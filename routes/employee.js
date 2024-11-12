const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

// Controller imports
const {
  createEmployee,
  getAllEmployee,
  getAllName,
} = require("../controllers/Employee");

// Define routes
router.post("/employee", Middleware, createEmployee);
router.get("/employee-get-all", Middleware, getAllEmployee);
router.get("/employee-get-all-name", Middleware, getAllName);

module.exports = router;
