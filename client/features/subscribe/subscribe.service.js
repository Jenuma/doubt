// ---------------------------------------------------------------------------------------------------------|
// subscribe.service.js                                                                                     |
//                                                                                                          |
// This file posts subscription emails.                                                                     |
//                                                                                                          |
// Author: wreyne                                                                                           |
// Date: 1 June 2017                                                                                        |
// ---------------------------------------------------------------------------------------------------------|
(function() {
    "use strict";
    
    function subscribeService($http) {
        
        this.subscribe = function(subscriber) {
            return $http.post("/api/subscribe", subscriber)
                .then(function(response) {
                    return response.data;
                }, function(response) {
                    console.log(response);
                });
        };
    }
    
    subscribeService.$inject = ["$http"];
    
    angular
        .module("br.services.subscribe", [])
        .service("subscribeService", subscribeService);
})();
