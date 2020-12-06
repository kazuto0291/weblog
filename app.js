const accesslogger = require("./lib/log/accesslogger.js");
const systemlogger = require("./lib/log/systemlogger.js");
const express = require("express");
const { access } = require("./lib/log/logger.js");
const app =express();


app.use(accesslogger());


app.use(systemlogger());



app.listen(3000);