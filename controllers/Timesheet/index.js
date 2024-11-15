// Use require instead of import
const createManageLeave = require("./ManageLeave/create");
const getAllManageLeave = require("./ManageLeave/getAll");

const createTimeSheet = require("./TimeSheet/create");
const getAllTimeSheet = require("./TimeSheet/getAll");

const createMarkedAttendance = require("./Attendance/MarkedAttendance/create");
const getAllMarkedAttendance = require("./Attendance/MarkedAttendance/getAll");

module.exports = {
  createManageLeave,
  getAllManageLeave,

  createTimeSheet,
  getAllTimeSheet,

  createMarkedAttendance,
  getAllMarkedAttendance,
};
