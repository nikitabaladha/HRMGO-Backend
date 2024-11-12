const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

const {
  createDepartment,
  getAllDepartment,
} = require("../controllers/Branch-Department");

router.post("/department", Middleware, createDepartment);
router.get("/department-get-all", Middleware, getAllDepartment);

module.exports = router;
