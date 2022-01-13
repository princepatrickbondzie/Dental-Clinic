require("dotenv").config();
const express = require("express");
const cors = require("cors");
const doctoreRoute = require("./routes/doctorRoute");
const articleRoute = require("./routes/articleRoute");
const planRoute = require("./routes/planRoute");
const serviceRoute = require("./routes/serviceRoute");
const timetableRoute = require("./routes/timetableRoute");
require("./config/database");

const app = express();
app.use(express.json());
app.use(cors());

app.use(
  "/api",
  doctoreRoute,
  articleRoute,
  planRoute,
  serviceRoute,
  timetableRoute
);

app.listen(9090, () => console.log("Database connected!!!"));
