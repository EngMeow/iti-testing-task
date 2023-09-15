const path = require("path");

module.exports = {
  entry: "./spec/index.sp_ec.js",

  output: {
    filename: "index.spec.js",

    path: path.resolve(__dirname, "spec"),
  },
};
