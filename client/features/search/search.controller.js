// ---------------------------------------------------------------------------------------------------------|
// search.controller.js                                                                                     |
//                                                                                                          |
// This file is the controller for the search feature.                                                      |
//                                                                                                          |         
// Author: wreyne                                                                                           |         
// Date: 1 June 2017                                                                                        |         
// ---------------------------------------------------------------------------------------------------------|
(function() {
    "use strict";
    
    function SearchController($stateParams, articleService) {
        var vm = this;
        
        vm.query = $stateParams.query;
        
        articleService.searchArticles(vm.query).then(function(response) {
            vm.results = response;
        });
    }
    
    SearchController.$inject = ["$stateParams", "articleService"];
    
    angular
        .module("br.controllers.search", [])
        .controller("SearchController", SearchController);
})();
