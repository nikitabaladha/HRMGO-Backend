const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

// Controller imports
const { createIndicator } = require("../controllers/Competency");

// Define routes
router.post("/indicator", Middleware, createIndicator);

module.exports = router;
