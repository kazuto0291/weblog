const config = require("../config.js");
const { src, dest, series, parallel } = require("gulp");
const del = require("del");
const uglify = require("gulp-uglify");
let clean, minify;

clean = async function() {
  await del("./javascripts/**/*", { cwd: config.path.output });
};

minify = function () {
  return src("./javascripts/**/*", { cwd: config.path.input })
    .pipe(uglify(config.uglify))
    .pipe(dest(".javascripts", { cwd: config.path.output }));
};

module.exports = series(clean, minify);