const accesslogger = require("./lib/log/accesslogger.js");
const systemlogger = require("./lib/log/systemlogger.js");
const express = require("express");
const { access } = require("./lib/log/logger.js");
const app =express();

app.set("view engine", "ejs");

app.use(accesslogger());

app.disable("x-powered-by");

app.use(systemlogger());

app.use("/public", express.static(__dirname + "/public/" + (process.env.NODE_ENV === "development" ? "development" : "production")));


app.use("/" , require("./routes/index.js"));





app.listen(3000);
