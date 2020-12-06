const config = require("../config.js");
const { src, dest, series, parallel } = require("gulp");
const del = require("del");
let clean, copy;

clean = async function () {
  await del("./japascripts/**/*", { cwd: config.path.output });
};

copy = function() {
  return src("./javascripts/**/*", { cwd: config.path.input })
      .pipe(dest("./javascripts", { cwd: config.path.output }));
};

module.exports = series(clean, copy);