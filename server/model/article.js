// ---------------------------------------------------------------------------------------------------------|
// article.js                                                                                               |
//                                                                                                          |
// This is the data model for an article.                                                                   |
//                                                                                                          |         
// Author: wreyne                                                                                           |         
// Date: 20 March 2017                                                                                      |         
// ---------------------------------------------------------------------------------------------------------|
var mongoose = require("mongoose");

var ArticleSchema = new mongoose.Schema({
    id: Number, default: 0,
    title: String, default: "",
    date: String, default: "",
    route: String, default: "",
    content: String, defaut: ""
});

exports.Article = mongoose.model("Article", ArticleSchema, "articles");
