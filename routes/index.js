// routes/index.js

const Controller = require("../controllers");

module.exports = (app) => {
  app.post("/api/signup", Controller.User.signup);
};
