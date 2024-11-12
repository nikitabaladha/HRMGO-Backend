// // routes/dashboard.js

// const express = require("express");
// const router = express.Router();
// const Middleware = require("../middleware/index.js");

// // Controller imports
// const EmployeeCreate = require("../controllers/Employee/Employee/create");
// const EmployeeGetAll = require("../controllers/Employee/Employee/getAll");
// const GetAllEmployeeName = require("../controllers/Employee/Employee/getAllName");

// // Define routes
// router.post("/employee", Middleware, EmployeeCreate.create);
// router.get("/employee-get-all", Middleware, EmployeeGetAll);
// router.get("/employee-get-all-name", Middleware, GetAllEmployeeName.getAllName);

// module.exports = router;

// routes/dashboard.js

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
