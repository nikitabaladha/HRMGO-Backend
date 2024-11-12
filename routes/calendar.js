// // routes/dashboard.js

// const express = require("express");
// const router = express.Router();
// const Middleware = require("../middleware/index.js");

// // Controller imports
// const CalendarCreate = require("../controllers/Dashboard/Calendar/create");
// const CalendarGetAll = require("../controllers/Dashboard/Calendar/getAll");

// // Define routes
// router.post("/calendar", Middleware, CalendarCreate.create);
// router.get("/calendar-get-all", Middleware, CalendarGetAll.getAll);

// module.exports = router;
// routes/dashboard.js

const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

const { createCalendar, getAllCalendar } = require("../controllers/Dashboard");

router.post("/department", Middleware, createCalendar);
router.get("/department-get-all", Middleware, getAllCalendar);

module.exports = router;
