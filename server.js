const express = require("express");
const app = express();

const { cars } = require("./data");

app.get("/cars", (req, res, next) => {
  res.status(200).json({
    cars
  });
});

module.exports = app;
