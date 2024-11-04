require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(bodyParser.json());

const routes = require("./routes");
routes(app);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
