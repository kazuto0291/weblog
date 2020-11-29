const gulp = require("gulp");
const load = require("require-dir");

load("./gulp/tasks", { recurse: true });

gulp.task("default", () => {
  console.log("hello");
  console.log(process.env.NODE_ENV);
});