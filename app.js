// const systemlogger = require("./lib/log/systemlogger.js");
// const express = require("express");
// const app =express();



// app.use(systemlogger());


//---
const logger =require("./lib/log/logger.js").application;
// logger.addContext("key", "test");
logger.error("test2","message2");

// ---

// app.listen(3000);