// routes/dashboard.js

const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

// Controller imports
const AnnouncementCreate = require("../controllers/Dashboard/Announcement/create");
const AnnouncementGetAll = require("../controllers/Dashboard/Announcement/getAll");

// Define routes
router.post("/announcement", Middleware, AnnouncementCreate.create);
router.get("/announcement-get-all", Middleware, AnnouncementGetAll.getAll);

module.exports = router;
