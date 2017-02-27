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
                $title: function() {return "Become Rampant";}
            }
        };
        
        var aboutState = {
            name: "about",
            url: "/about",
            templateUrl: "/features/about/about.html",
            resolve: {
                $title: function() {return "About - Become Rampant";}
            }
        };
        
        var blogState = {
            name: "blog",
            url: "/blog",
            templateUrl: "/features/blog/blog.html",
            controller: "BlogController",
            controllerAs: "blogCtrl",
            resolve: {
                $title: function() {return "Blog - Become Rampant";}
            }
        };
        
        var articleState = {
            name: "article",
            url: "/blog/:articleTitle",
            templateUrl: "/features/article/article.html",
            controller: "ArticleController",
            controllerAs: "articleCtrl",
            resolve: {
                $title: function() {return "Article - Become Rampant";}
            }
        };
        
        var storeState = {
            name: "store",
            url: "/store",
            templateUrl: "/features/store/store.html",
            resolve: {
                $title: function() {return "Store - Become Rampant";}
            }
        };
        
        $locationProvider.html5Mode(true);
        
        $stateProvider.state(homeState);
        $stateProvider.state(aboutState);
        $stateProvider.state(blogState);
        $stateProvider.state(articleState);
        $stateProvider.state(storeState);
    }
    
    config.$inject = ["$stateProvider", "$locationProvider"];
    
    angular
        .module("app", [
            "ngSanitize",
            "ui.router",
            "ui.router.title",
            "wgl.controllers.home",
            "wgl.controllers.blog",
            "wgl.controllers.article"
        ])
        .config(config);
})();
