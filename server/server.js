// ---------------------------------------------------------------------------------------------------------|
// server.js                                                                                                |
//                                                                                                          |
// This is the main entry point for the MEAN app.                                                           |
//                                                                                                          |         
// Author: wreyne                                                                                           |         
// Date: 20 February 2017                                                                                   |         
// ---------------------------------------------------------------------------------------------------------|
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// ---------------------------------------------------------------------------------------------------------|
// App Configuration                                                                                        |
// ---------------------------------------------------------------------------------------------------------|
app.use(bodyParser.json());

// ---------------------------------------------------------------------------------------------------------|
// Static Directories                                                                                       |
// ---------------------------------------------------------------------------------------------------------|
app.use("/angular-ui-router-title", express.static(__dirname + "/../node_modules/angular-ui-router-title"));
app.use("/app", express.static(__dirname + "/../client/app"));
app.use("/features", express.static(__dirname + "/../client/features"));

app.use(express.static(__dirname + "/../client/app"));

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
