// ---------------------------------------------------------------------------------------------------------|
// server.js                                                                                                |
//                                                                                                          |
// This is the main entry point for the MEAN app.                                                           |
//                                                                                                          |         
// Author: wreyne                                                                                           |         
// Date: 20 February 2017                                                                                   |         
// ---------------------------------------------------------------------------------------------------------|
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
var dbConfig = require("../config/dbConfig");

var app = express();

// ---------------------------------------------------------------------------------------------------------|
// App Configuration                                                                                        |
// ---------------------------------------------------------------------------------------------------------|
app.use(bodyParser.json());

// ---------------------------------------------------------------------------------------------------------|
// Static Directories                                                                                       |
// ---------------------------------------------------------------------------------------------------------|
app.use("/angular-ui-router-title", express.static(__dirname + "/../node_modules/angular-ui-router-title"));
app.use("/angular-recaptcha", express.static(__dirname + "/../node_modules/angular-recaptcha/release"));
app.use("/app", express.static(__dirname + "/../client/app"));
app.use("/features", express.static(__dirname + "/../client/features"));
app.use("/assets", express.static(__dirname + "/../assets"));

app.use(express.static(__dirname + "/../client/app"));

// ---------------------------------------------------------------------------------------------------------|
// MongoDB Connection Logic                                                                                 |
// ---------------------------------------------------------------------------------------------------------|
mongoose.connect(dbConfig.testUrl);
var connection = mongoose.connection;

connection.on("error", console.error.bind(console, "Connection error: "));

connection.once("open", function() {
   console.log(`Connected to database.`);
});

mongoose.Promise = global.Promise;

// ---------------------------------------------------------------------------------------------------------|
// Routes                                                                                                   |
// ---------------------------------------------------------------------------------------------------------|
app.use("/", require("./routes")());

app.use(function(req, res, next) {
    res.sendFile(path.resolve(__dirname + "/../client/app/index.html"));
});

// ---------------------------------------------------------------------------------------------------------|
// App Start                                                                                                |
// ---------------------------------------------------------------------------------------------------------|
var port = process.env.PORT || 8080;
app.listen(port);
console.log(`Server running on port ${port}...`);

module.exports = app;
