// ---------------------------------------------------------------------------------------------------------|
// blog.controller.js                                                                                       |
//                                                                                                          |
// This file is the controller for the Blog page feature.                                                   |
//                                                                                                          |         
// Author: wreyne                                                                                           |         
// Date: 26 February 2017                                                                                   |         
// ---------------------------------------------------------------------------------------------------------|
(function() {
    "use strict";
    
    function BlogController(articleService) {
        var vm = this;
        
        vm.getThumbnailData = function() {
            articleService.getThumbnailData().then(function(response) {
                vm.thumbnails = response;
            });
        };
        
        vm.getThumbnailData();
    }
    
    BlogController.$inject = ["articleService"];
    
    angular
        .module("wgl.controllers.blog", [])
        .controller("BlogController", BlogController);
})();
