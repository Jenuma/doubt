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
    
    function ArticleController($stateParams) {
        var vm = this;
        
        vm.articles = [
            {
                title: "Stop Telling Your Kids They're Smart",
                date: "27 February 2017",
                photoUrl: "/assets/img/stop-telling-your-kids-theyre-smart.jpg",
                link: "stop-telling-your-kids-theyre-smart",
                content: "Here's some sample content.<p>This should be in a new paragraph.</p>"
            },
            {
                title: "Why You Should Stop Caring About the News",
                date: "1 March 2017",
                photoUrl: "/assets/img/why-you-should-stop-caring-about-the-news.jpg",
                link: "why-you-should-stop-caring-about-the-news.jpg",
                content: "Here's different content. Here's where you can find <a href='#'>that thing</a>."
            },
            {
                title: "The Dangers of Procrastinating When There's No Deadline",
                date: "15 March 2017",
                photoUrl: "/assets/img/the-dangers-of-procrastinating-when-theres-no-deadline.jpg",
                link: "the-dangers-of-procrastinating-when-theres-no-deadline",
                content: "Not <i>much</i> content here."
            }
        ];
        
        for(var i = 0; i < vm.articles.length; i++) {
            if(vm.articles[i].link === $stateParams.articleTitle) {
                vm.thisArticle = vm.articles[i];
            }
        }
    }
    
    ArticleController.$inject = ["$stateParams"];
    
    angular
        .module("wgl.controllers.article", [])
        .controller("ArticleController", ArticleController);
})();
