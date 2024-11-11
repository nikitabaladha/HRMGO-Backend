// routes/dashboard.js

const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

// Controller imports
const DepartmentCreate = require("../controllers/branch-Department/Department/create");
const DepartmentGetAll = require("../controllers/branch-Department/Department/getAll");

// Define routes
router.post("/department", Middleware, DepartmentCreate.create);
router.get("/department-get-all", Middleware, DepartmentGetAll);

module.exports = router;
