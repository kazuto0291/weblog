const log4js = require("log4js");
var levels = require("log4js/lib/levels.js")().levels;
const config = require("../../config/log4js.config.js");
let console, system, application;

log4js.configure(config);

console = log4js.getLogger();

system = log4js.getLogger("system");


// application loggerを拡張するために、クラスを作る

var ApplicationLogger = function () {
  this.logger = log4js.getLogger("application");
};
var proto = ApplicationLogger.prototype;
for (let level of levels) {
  level = level.toLowerCase();//levelを小文字化する
  proto[level] = (function (level) {  //JavaScriptは関数スコープなので関数を１挟むことで、for文中のlevelが個別で保持される
    return function (key, message) {
      var logger = this.logger;
      logger.addContext("key",key);
      logger[level](message);
    };
  })(level);
}
application = new ApplicationLogger();

module.exports = {
  console,
  system,
  application
};