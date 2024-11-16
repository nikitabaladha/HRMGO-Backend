// Use require instead of import
const createManageLeave = require("./ManageLeave/create");
const getAllManageLeave = require("./ManageLeave/getAll");
const updateStatus = require("./ManageLeave/updateStatus");
const updateStatusCancelled = require("./ManageLeave/updateStatusCancelled");

const createTimeSheet = require("./TimeSheet/create");
const getAllTimeSheet = require("./TimeSheet/getAll");

const createMarkedAttendance = require("./Attendance/MarkedAttendance/create");
const getAllMarkedAttendance = require("./Attendance/MarkedAttendance/getAll");

module.exports = {
  createManageLeave,
  getAllManageLeave,
  updateStatus,
  updateStatusCancelled,

  createTimeSheet,
  getAllTimeSheet,

  createMarkedAttendance,
  getAllMarkedAttendance,
};
