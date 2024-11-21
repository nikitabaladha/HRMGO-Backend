const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

const {
  createDesignation,
  getAllDesignation,
} = require("../controllers/Branch-Department");

router.post("/designation", Middleware, createDesignation);
router.get("/designation-get-all", Middleware, getAllDesignation);
// router.get(
//   "/department-get-all-by-branch-id",
//   Middleware,
//   getAllDepartmentByBranchId
// );

module.exports = router;
