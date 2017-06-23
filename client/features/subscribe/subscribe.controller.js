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
    
    function SubscribeController($timeout, $mdDialog, subscribeService) {
        var vm = this;
        
        vm.subscribe = function() {
            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(regex.test(vm.email)) {
                var userInfo = {
                    email: vm.email
                };

                subscribeService.subscribe(userInfo).then(function(response) {
                    var modalTitle = "You are now subscribed to Become Rampant.";
                    var modalTextContent = "You will receive an email anytime a new article is posted.";

                    if(response.substring) {
                        modalTitle = "You are already subscribed to Become Rampant.";
                        modalTextContent = "";
                    }

                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector("body")))
                            .clickOutsideToClose(true)
                            .title(modalTitle)
                            .textContent(modalTextContent)
                            .ok("Got it!")
                    );

                    vm.email = "";
                });
            } else {
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector("body")))
                        .clickOutsideToClose(true)
                        .title("Please enter a valid email address.")
                        .textContent("")
                        .ok("Go back")
                );
            }
        };
    }
    
    SubscribeController.$inject = ["$timeout", "$mdDialog", "subscribeService"];
    
    angular
        .module("br.controllers.subscribe", [])
        .controller("SubscribeController", SubscribeController);
})();
