// Use require instead of import
const createDashboardMetric = require("./DashboardMetric/create");
const getAllDashboardMetric = require("./DashboardMetric/getAll");

const createMeeting = require("./Meeting/create");
const getAllMeeting = require("./Meeting/getAll");

const createAttendance = require("./Attendance/create");
const getAllAttendance = require("./Attendance/getAll");

module.exports = {
  createDashboardMetric,
  getAllDashboardMetric,

  createMeeting,
  getAllMeeting,

  createAttendance,
  getAllAttendance,
};
