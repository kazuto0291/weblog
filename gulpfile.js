const config = require("./gulp/config.js");
const { series, parallel } = require("gulp");
const load =require("require-dir");
let tasks, development, production;

tasks = load("./gulp/tasks", {recurse: true });
// recurseファルダ内にファルダが入れ子でも読み込んでくれる

development = series(
  tasks["clean-log"],
  tasks["copy-images"],
  tasks["copy-javascripts"],
  tasks["copy-third_party"],
  tasks["compile-sass"]
);


production = series(
  tasks["clean-log"],
  tasks["copy-images"],
  tasks["copy-javascripts"],
  tasks["copy-third_party"],
  tasks["compile-sass"]
);

module.exports = {
  development,
  production,
  default: config.env.IS_DEVELOPMENT ? development : production
};