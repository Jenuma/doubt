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
    
    function BlogController() {
        var vm = this;
        
        vm.articles = [
            {
                title: "Stop Telling Your Kids They're Smart",
                date: "27 February 2017",
                photoUrl: "/assets/img/stop-telling-your-kids-theyre-smart.jpg"
            },
            {
                title: "Why You Should Stop Caring About the News",
                date: "1 March 2017",
                photoUrl: "/assets/img/why-you-should-stop-caring-about-the-news.jpg"
            },
            {
                title: "The Dangers of Procrastinating When There's No Deadline",
                date: "15 March 2017",
                photoUrl: "/assets/img/the-dangers-of-procrastinating-when-theres-no-deadline.jpg"
            }
        ]
    }
    
    BlogController.$inject = [];
    
    angular
        .module("wgl.controllers.blog", [])
        .controller("BlogController", BlogController);
})();
