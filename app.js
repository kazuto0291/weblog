const accesslogger = require("./lib/log/accesslogger.js");
const systemlogger = require("./lib/log/systemlogger.js");
const express = require("express");
const app = express();


app.set("view engine", "ejs");

app.disable("x-powered-by");

app.use("/public", express.static(__dirname + "/public/" + (process.env.NODE_ENV === "development" ? "development" : "production")));

app.use(accesslogger());

app.use("/" , require("./routes/index.js"));
app.use("/posts/",require("./routes/posts.js"));
app.use(systemlogger());


app.listen(3000);
