const config =require("../config.js");
const del = require("del");
let clean;

clean = async function () {
  await del("./**/*", { cwd: config.path.log});
}

module.exports = clean;
