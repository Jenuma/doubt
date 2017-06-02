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
        
        // -------------------------------------------------------------------------------------------------|
        // Resolve Functions                                                                                |
        // -------------------------------------------------------------------------------------------------|
        function getArticle($stateParams, articleService) {
            return articleService.getArticle($stateParams.articleRoute);
        }
        
        function getArticleTitle(currentArticle) {
            return currentArticle.title + " - Become Rampant";
        }
        
        getArticle.$inject = ["$stateParams", "articleService"];
        getArticleTitle.$inject = ["currentArticle"];
        
        // -------------------------------------------------------------------------------------------------|
        // States                                                                                           |
        // -------------------------------------------------------------------------------------------------|
        var homeState = {
            name: "home",
            url: "/",
            templateUrl: "/features/home/home.html",
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
            url: "/blog/:articleRoute",
            templateUrl: "/features/article/article.html",
            controller: "ArticleController",
            controllerAs: "articleCtrl",
            resolve: {
                currentArticle: getArticle,
                $title: getArticleTitle
            }
        };
        
//        var storeState = {
//            name: "store",
//            url: "/store",
//            templateUrl: "/features/store/store.html",
//            resolve: {
//                $title: function() {return "Store - Become Rampant";}
//            }
//        };
        
        var donateState = {
            name: "donate",
            url: "/donate",
            templateUrl: "/features/donate/donate.html",
            resolve: {
                $title: function() {return "Donate - Become Rampant";}
            }
        };
        
        var searchState = {
            name: "search",
            url: "/search/:query",
            templateUrl: "/features/search/search.html",
            controller: "SearchController",
            controllerAs: "searchCtrl",
            resolve: {
                $title: function() {return "Search - Become Rampant";}
            }
        };
        
        var termsOfServiceState = {
            name: "termsOfService",
            url: "/tos",
            templateUrl: "/features/termsOfService/termsOfService.html",
            resolve: {
                $title: function() {return "Terms of Service - Become Rampant";}
            }
        };
        
        var privacyPolicyState = {
            name: "privacyPolicy",
            url: "/privacy",
            templateUrl: "/features/privacyPolicy/privacyPolicy.html",
            resolve: {
                $title: function() {return "Privacy Policy - Become Rampant";}
            }
        };
        
        var notFoundState = {
            name: "notFound",
            url: "*path",
            templateUrl: "/features/error/404.html",
            resolve: {
                $title: function() {return "404 - Not Found";}
            }
        };
        
        $locationProvider.html5Mode(true);
        
        $stateProvider.state(homeState);
        $stateProvider.state(aboutState);
        $stateProvider.state(blogState);
        $stateProvider.state(articleState);
        //$stateProvider.state(storeState);
        $stateProvider.state(donateState);
        $stateProvider.state(searchState);
        $stateProvider.state(termsOfServiceState);
        $stateProvider.state(privacyPolicyState);
        $stateProvider.state(notFoundState);
    }
    
    config.$inject = ["$stateProvider", "$locationProvider"];
    
    angular
        .module("app", [
            "vcRecaptcha",
            "ngAnimate",
            "ngAria",
            "ngSanitize",
            "ngMaterial",
            "ui.router",
            "ui.router.title",
            "br.services.subscribe",
            "br.services.article",
            "br.controllers.nav",
            "br.controllers.subscribe",
            "br.controllers.blog",
            "br.controllers.search",
            "br.controllers.article"
        ])
        .config(config);
})();
