// routes/dashboard.js

const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

// Controller imports
const {
  createManageLeave,
  getAllManageLeave,
} = require("../controllers/Timesheet");

// Define routes
router.post("/manage-leave", Middleware, createManageLeave);
router.get("/manage-leave-get-all", Middleware, getAllManageLeave);

module.exports = router;
