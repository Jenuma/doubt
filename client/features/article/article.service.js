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
//        var data = [
//            {
//                title: "Stop Telling Your Kids They're Smart",
//                date: "27 February 2017",
//                photoUrl: "/assets/img/stop-telling-your-kids-theyre-smart.jpg",
//                link: "stop-telling-your-kids-theyre-smart",
//                content: "Here's some sample content.<p>This should be in a new paragraph.</p>"
//            },
//            {
//                title: "Why You Should Stop Caring About the News",
//                date: "1 March 2017",
//                photoUrl: "/assets/img/why-you-should-stop-caring-about-the-news.jpg",
//                link: "why-you-should-stop-caring-about-the-news",
//                content: "Here's different content. Here's where you can find <a href='#'>that thing</a>."
//            },
//            {
//                title: "The Dangers of Procrastinating When There's No Deadline",
//                date: "15 March 2017",
//                photoUrl: "/assets/img/the-dangers-of-procrastinating-when-theres-no-deadline.jpg",
//                link: "the-dangers-of-procrastinating-when-theres-no-deadline",
//                content: "Not <i>much</i> content here."
//            }
//        ];
        
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
        
//        this.getThisArticle = function(articleTitle) {
//            for(var i = 0; i < data.length; i++) {
//                if(data[i].link === articleTitle) {
//                    return data[i];
//                }
//            }
//        };
    }
    
    articleService.$inject = ["$http"];
    
    angular
        .module("wgl.services.article", [])
        .service("articleService", articleService);
})();