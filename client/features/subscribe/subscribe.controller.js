// ---------------------------------------------------------------------------------------------------------|
// subscribe.controller.js                                                                                  |
//                                                                                                          |
// This file is the controller for the email subscription feature.                                          |
//                                                                                                          |         
// Author: wreyne                                                                                           |         
// Date: 1 June 2017                                                                                        |         
// ---------------------------------------------------------------------------------------------------------|
(function() {
    "use strict";
    
    function SubscribeController(subscribeService) {
        var vm = this;
        
        vm.subscribe = function() {
            var subscriber = {
                email: vm.email
            }
            
            subscribeService.subscribe(subscriber).then(function(response) {
                vm.result = response;
            });
        };
    }
    
    SubscribeController.$inject = ["subscribeService"];
    
    angular
        .module("br.controllers.subscribe", [])
        .controller("SubscribeController", SubscribeController);
})();
