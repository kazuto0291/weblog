const  log4js = require("log4js");

const console;

log4js.configure({
  appenders:{
    ConsoleLogAppender:{
      
    }
  },
  categories: {
    "default": {
      appenders:""
    }
  }
});

console = log4js.getLogger("console");

module.exports = {
  console
}