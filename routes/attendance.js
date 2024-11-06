// routes/dashboard.js

const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

// Controller imports
const AttendanceCreate = require("../controllers/Dashboard/Attendance/create");
const AttendanceGetAll = require("../controllers/Dashboard/Attendance/getAll");

// Define routes
router.post("/attendance", Middleware, AttendanceCreate.create);
router.get("/attendance-get-all", Middleware, AttendanceGetAll.getAll);

module.exports = router;
