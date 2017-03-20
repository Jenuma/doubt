// ---------------------------------------------------------------------------------------------------------|
// home.controller.js                                                                                       |
//                                                                                                          |
// This file is the controller for the Home page feature.                                                   |
//                                                                                                          |         
// Author: wreyne                                                                                           |         
// Date: 20 February 2017                                                                                   |         
// ---------------------------------------------------------------------------------------------------------|
(function() {
    "use strict";
    
    function HomeController($http) {

    }
    
    HomeController.$inject = ["$http"];
    
    angular
        .module("wgl.controllers.home", [])
        .controller("HomeController", HomeController);
})();
