// routes/dashboard.js

const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

// Controller imports
const EmployeeCreate = require("../controllers/Employee/Employee/create");
const EmployeeGetAll = require("../controllers/Employee/Employee/getAll");

// Define routes
router.post("/employee", Middleware, EmployeeCreate.create);
router.get("/employee-get-all", Middleware, EmployeeGetAll);

module.exports = router;
