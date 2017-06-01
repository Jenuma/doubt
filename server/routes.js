// ---------------------------------------------------------------------------------------------------------|
// routes.js                                                                                                |
//                                                                                                          |
// This is the directory for all the server side routes.                                                    |
//                                                                                                          |         
// Author: wreyne                                                                                           |         
// Date: 20 February 2017                                                                                   | 
// ---------------------------------------------------------------------------------------------------------|
module.exports = function() {
    var router = require("express").Router();
    
    // -----------------------------------------------------------------------------------------------------|
    // API                                                                                                  |
    // -----------------------------------------------------------------------------------------------------|
    router.use("/api/subscribe", require("./endpoint/subscribe.endpoint")());
    router.use("/api/articles", require("./endpoint/article.endpoint")());
    
    return router;
}
