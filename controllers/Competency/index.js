const createCompetency = require("./Competency/create");
const getAllCompetency = require("./Competency/getAll");

const createCompetencyList = require("./CompetencyList/create");
const getAllCompetencyList = require("./CompetencyList/getAll");

const createIndicator = require("./Indicator/create");
const getAllIndicator = require("./Indicator/getAll");

module.exports = {
  createCompetency,
  getAllCompetency,
  createCompetencyList,
  getAllCompetencyList,
  createIndicator,
  getAllIndicator,
};
