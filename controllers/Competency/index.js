const createCompetency = require("./Competency/create");
const getAllCompetency = require("./Competency/getAll");

const createCompetencyList = require("./CompetencyList/create");
const getAllCompetencyList = require("./CompetencyList/getAll");

const createIndicator = require("./Indicator/create");

module.exports = {
  createCompetency,
  getAllCompetency,
  createCompetencyList,
  getAllCompetencyList,
  createIndicator,
};
