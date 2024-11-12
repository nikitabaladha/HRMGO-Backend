// // routes/dashboard.js

// const express = require("express");
// const router = express.Router();
// const Middleware = require("../middleware/index.js");

// // Controller imports
// const DashboardMetricCreate = require("../controllers/Dashboard/DashboardMetric/create");
// const DashboardMetricGetAll = require("../controllers/Dashboard/DashboardMetric/getAll");
// const DashboardMetricGetById = require("../controllers/Dashboard/DashboardMetric/getById");
// const DashboardMetricUpdateById = require("../controllers/Dashboard/DashboardMetric/updateById");
// const DashboardMetricDeleteById = require("../controllers/Dashboard/DashboardMetric/deleteById");

// // Define routes
// router.post("/dashboard-metric", Middleware, DashboardMetricCreate.create);
// router.get("/dashboard-metric-get-all", Middleware, DashboardMetricGetAll);
// router.get("/dashboard-metric/:id", Middleware, DashboardMetricGetById);
// router.put(
//   "/dashboard-metric/:id",
//   Middleware,
//   DashboardMetricUpdateById.updateById
// );
// router.delete(
//   "/dashboard-metric/:id",
//   Middleware,
//   DashboardMetricDeleteById.deleteById
// );

// module.exports = router;

// routes/dashboard.js

const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/index.js");

const {
  createDashboardMetric,
  getAllDashboardMetric,
  getDashboardMetricById,
  deleteDashboardMetricById,
  updateDashboardMetricById,
} = require("../controllers/Dashboard");

// // Controller imports
// const DashboardMetricCreate = require("../controllers/Dashboard/DashboardMetric/create");
// const DashboardMetricGetAll = require("../controllers/Dashboard/DashboardMetric/getAll");
// const DashboardMetricGetById = require("../controllers/Dashboard/DashboardMetric/getById");
// const DashboardMetricUpdateById = require("../controllers/Dashboard/DashboardMetric/updateById");
// const DashboardMetricDeleteById = require("../controllers/Dashboard/DashboardMetric/deleteById");

// Define routes
router.post("/dashboard-metric", Middleware, createDashboardMetric);
router.get("/dashboard-metric-get-all", Middleware, getAllDashboardMetric);
router.get("/dashboard-metric/:id", Middleware, getDashboardMetricById);
router.put("/dashboard-metric/:id", Middleware, updateDashboardMetricById);
router.delete("/dashboard-metric/:id", Middleware, deleteDashboardMetricById);

module.exports = router;
