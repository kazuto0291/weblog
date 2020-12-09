const config =require("../config.js");
const { src, dest, series, parallel } = require("gulp");
const del = require("del");
let clean, copy;

// 既存の画像を削除してコピーするので最初に削除が入る
clean = async function() {
  await del("./images/**/*", { cwd: config.path.output });
};

// 削除後コピーするタスクを実行する
copy = function () {
  return src("./images/**/*", { cwd: config.path.input })
    .pipe(dest("./images", { cwd: config.path.output }));
};

module.exports = series(clean, copy);
