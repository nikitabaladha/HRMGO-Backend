// routes/dashboard.js

const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

// Controller imports
const MeetingCreate = require("../controllers/Dashboard/Meeting/create");
const MeetingGetAll = require("../controllers/Dashboard/Meeting/getAll");

// Define routes
router.post("/meeting", Middleware, MeetingCreate.create);
router.get("/meeting-get-all", Middleware, MeetingGetAll.getAll);

module.exports = router;
