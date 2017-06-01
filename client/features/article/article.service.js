// ---------------------------------------------------------------------------------------------------------|
// article.service.js                                                                                       |
//                                                                                                          |
// This file fetches article data.                                                                          |
//                                                                                                          |         
// Author: wreyne                                                                                           |         
// Date: 27 February 2017                                                                                   |         
// ---------------------------------------------------------------------------------------------------------|
(function() {
    "use strict";
    
    function articleService($http) {
        
        this.getThumbnailData = function() {
            return $http.get("/api/articles")
                .then(function(response) {
                    return response.data;
                }, function(response) {
                    console.log(response);
                });
        };
        
        this.getArticle = function(articleRoute) {
            return $http.get("/api/articles/" + articleRoute)
                .then(function(response) {
                    return response.data;
                }, function(response) {
                    console.log(response);
                });
        };
        
        this.searchArticles = function(query) {
            return $http.get("/api/articles/search/" + query)
                .then(function(response) {
                    return response.data;
                }, function(response) {
                    console.log(response);
                });
        };
    }
    
    articleService.$inject = ["$http"];
    
    angular
        .module("br.services.article", [])
        .service("articleService", articleService);
})();
