const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

const { createCalendar, getAllCalendar } = require("../controllers/Dashboard");

router.post("/department", Middleware, createCalendar);
router.get("/department-get-all", Middleware, getAllCalendar);

module.exports = router;
