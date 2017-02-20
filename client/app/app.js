// ---------------------------------------------------------------------------------------------------------|
// app.js                                                                                                   |
//                                                                                                          |
// This file is responsible for the app's front-end configuration and routing.                              |
//                                                                                                          |         
// Author: wreyne                                                                                           |         
// Date: 20 February 2017                                                                                   |         
// ---------------------------------------------------------------------------------------------------------|
(function() {
    "use strict";
    
    function config($stateProvider, $locationProvider) {
        
        var homeState = {
            name: "home",
            url: "/",
            templateUrl: "/features/home/home.html",
            controller: "HomeController",
            controllerAs: "homeCtrl",
            resolve: {
                $title: function() {return "Home";}
            }
        };
        
        $locationProvider.html5Mode(true);
        
        $stateProvider.state(homeState);
    }
    
    config.$inject = ["$stateProvider", "$locationProvider"];
    
    angular
        .module("app", [
            "ui.router",
            "ui.router.title",
            "wgl.controllers.home"
        ])
        .config(config);
})();
