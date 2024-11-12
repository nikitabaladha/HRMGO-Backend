// Use require instead of import
const createBranch = require("./Branch/create");
const getAllBranch = require("./Branch/getAll");

const createDepartment = require("./Department/create");
const getAllDepartment = require("./Department/getAll");

module.exports = {
  createBranch,
  getAllBranch,

  createDepartment,
  getAllDepartment,
};
