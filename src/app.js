const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();

const router = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/", router);

module.exports = app;
