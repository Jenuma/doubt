// ---------------------------------------------------------------------------------------------------------|
// article.endpoint.js                                                                                      |
//                                                                                                          |
// This is the endpoint for all API requests regarding articles.                                            |
//                                                                                                          |         
// Author: wreyne                                                                                           |         
// Date: 20 March 2017                                                                                      | 
// ---------------------------------------------------------------------------------------------------------|
module.exports = function() {
    var router = require("express").Router();
    
    function getThumbnails(req, res, next) {
        var Article = require("../model/article").Article;
//        Article.find({}, {"_id": 0, "title": 1, "date": 1, "route": 1}).exec()
        Article.find({}, {}).sort({id: -1}).exec()
            .then(function(results) {
                res.status(200).json(results);
            })
            .catch(function(err) {
                console.log(err);
            });
    }
    
    function getArticle(req, res, next) {
        var articleRoute = req.params.articleRoute;
        
        var Article = require("../model/article").Article;
        Article.findOne({route: articleRoute}, {"_id": 0}).exec()
            .then(function(result) {
                if(result) {
                    res.status(200).json(result);
                } else {
                    res.status(404).send("Article could not be found.");
                }
            })
            .catch(function(err) {
                console.log(err);
            });
    }
    
    function searchArticles(req, res, next) {
        var query = req.params.query;
        var regex = new RegExp(query, "i");
        
        var Article = require("../model/article").Article;
        Article.find({$or:[{"title": regex}, {"content":regex}]}, {"_id": 0}).exec()
            .then(function(result) {
                if(result) {
                    res.status(200).json(result);
                } else {
                    res.status(404).send("Search returned no results.");
                }
            })
            .catch(function(err) {
                console.log(err);
            });
    }
    
    router.get("/", getThumbnails);
    router.get("/:articleRoute", getArticle);
    router.get("/search/:query", searchArticles);
    
    return router;
};
