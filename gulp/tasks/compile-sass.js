const config = require("../config.js");
const { src, dest, series, parallel } = require("gulp");
const del = require("del");
const sass = require("gulp-sass");
let clean, compile;

clean = async function () {
  await del("./stylesheets/**/*", { cwd: config.path.output });
};

compile = function () {
  return src("./stylesheets/**/*.scss", { cwd: config.path.input })
      .pipe(sass(config.sass))
      .pipe(dest("./stylesheets", { cwd: config.path.output }));
};

module.exports = series(clean, compile);