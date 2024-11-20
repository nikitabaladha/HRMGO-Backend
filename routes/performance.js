const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

const { createPerformance } = require("../controllers/Performance");

router.post("/performance", Middleware, createPerformance);

module.exports = router;
