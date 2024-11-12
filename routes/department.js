// // routes/dashboard.js

// const express = require("express");
// const router = express.Router();
// const Middleware = require("../middleware/index.js");

// // Controller imports
// const DepartmentCreate = require("../controllers/branch-Department/Department/create");
// const DepartmentGetAll = require("../controllers/branch-Department/Department/getAll");

// // Define routes
// router.post("/department", Middleware, DepartmentCreate);
// router.get("/department-get-all", Middleware, DepartmentGetAll);

// module.exports = router;

// routes/dashboard.js

const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

const {
  createDepartment,
  getAllDepartment,
} = require("../Controllers/Branch-Department");

router.post("/department", Middleware, createDepartment);
router.get("/department-get-all", Middleware, getAllDepartment);

module.exports = router;
