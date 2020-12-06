const config =require("../config.js");
// const gulp = require("gulp");
const del = require("del");
let clean;

// gulp.task("clean-log", ()=> {
//   return del("./**/*", {cwd: config.path.log});
// });

clean = async function () {
  await del("./**/*", { cwd: config.path.log});
}

module.exports = clean;
