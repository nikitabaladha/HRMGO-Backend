// routes/index.js
const express = require("express");
const signup = require("../controllers/User/signup");
const login = require("../controllers/User/login");

const dashboardRoutes = require("./dashboard");
const meetingRoutes = require("./meeting");
const attendanceRoutes = require("./attendance");
const announcementRoutes = require("./announcement");

module.exports = (app) => {
  app.post("/api/signup", signup);
  app.post("/api/login", login);

  app.use("/api", dashboardRoutes); // This mounts the dashboard routes

  app.use("/api", meetingRoutes); // This mounts the meeting routes

  app.use("/api", attendanceRoutes); // This mounts the attendanceRoutes routes

  app.use("/api", announcementRoutes); // This mounts the announcementRoutes routes
};
