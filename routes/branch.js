// routes/dashboard.js

const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

// Controller imports
const BranchCreate = require("../controllers/Branch-Department/Branch/create");
const BranchGetAll = require("../controllers/Branch-Department/Branch/getAll");

// Define routes
router.post("/branch", Middleware, BranchCreate.create);
router.get("/branch-get-all", Middleware, BranchGetAll);

module.exports = router;
