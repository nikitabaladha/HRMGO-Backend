// Use require instead of import
const createDashboardMetric = require("./DashboardMetric/create");
const getAllDashboardMetric = require("./DashboardMetric/getAll");

const createMeeting = require("./Meeting/create");
const getAllMeeting = require("./Meeting/getAll");

const createAttendance = require("./Attendance/create");
const getAllAttendance = require("./Attendance/getAll");

const createAnnouncement = require("./Announcement/create");
const getAllAnnouncement = require("./Announcement/getAll");

const createCalendar = require("./Calendar/create");
const getAllCalendar = require("./Calendar/getAll");

const createIncomeExpenseChart = require("./IncomeExpenseChart/create");
const getAllIncomeExpenseChart = require("./IncomeExpenseChart/getAll");

module.exports = {
  createDashboardMetric,
  getAllDashboardMetric,

  createMeeting,
  getAllMeeting,

  createAttendance,
  getAllAttendance,

  createAnnouncement,
  getAllAnnouncement,

  createCalendar,
  getAllCalendar,

  createIncomeExpenseChart,
  getAllIncomeExpenseChart,
};
