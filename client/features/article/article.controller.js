// ---------------------------------------------------------------------------------------------------------|
// article.controller.js                                                                                    |
//                                                                                                          |
// This file is the controller for the Article page feature.                                                |
//                                                                                                          |         
// Author: wreyne                                                                                           |         
// Date: 27 February 2017                                                                                   |         
// ---------------------------------------------------------------------------------------------------------|
(function() {
    "use strict";
    
    function ArticleController(currentArticle) {
        var vm = this;
        
        vm.article = currentArticle;
    }
    
    ArticleController.$inject = ["currentArticle"];
    
    angular
        .module("wgl.controllers.article", [])
        .controller("ArticleController", ArticleController);
})();
