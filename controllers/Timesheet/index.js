// Use require instead of import
const createManageLeave = require("./ManageLeave/create");
const getAllManageLeave = require("./ManageLeave/getAll");

const createTimeSheet = require("./TimeSheet/create");
const getAllTimeSheet = require("./TimeSheet/getAll");

module.exports = {
  createManageLeave,
  getAllManageLeave,

  createTimeSheet,
  getAllTimeSheet,
};
