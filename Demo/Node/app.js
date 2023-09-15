var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/mohamed", (req, res) => {
  res.status(200).send("hello mohamed");
});
var server = app.listen(3000);

module.exports = server;
