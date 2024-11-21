const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

// Controller imports
const {
  createIndicator,
  getAllIndicator,
  getById,
  deleteById,
} = require("../controllers/Competency");

// Define routes
router.post("/indicator", Middleware, createIndicator);
router.get("/indicator", Middleware, getAllIndicator);
router.get("/indicator/:id", Middleware, getById);
router.delete("/indicator/:id", Middleware, deleteById);

module.exports = router;
