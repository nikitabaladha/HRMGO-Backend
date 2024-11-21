const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

// Controller imports
const {
  createIndicator,
  getAllIndicator,
} = require("../controllers/Competency");

// Define routes
router.post("/indicator", Middleware, createIndicator);
router.get("/indicator", Middleware, getAllIndicator);

module.exports = router;
