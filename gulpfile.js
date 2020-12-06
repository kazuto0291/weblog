const config = require("./gulp/config.js");
const { series, parallel } = require("gulp");
const load =require("require-dir");
let tasks, development, production;

tasks = load("./gulp/tasks", {recurse: true });

development = series(
  tasks["clean-log"]
);


production = series(
  tasks["clean-log"]
);

module.exports = {
  development,
  production,
  default: config.env.IS_DEVELOPMENT ? development : production
};