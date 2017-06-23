// ---------------------------------------------------------------------------------------------------------|
// nav.controller.js                                                                                        |
//                                                                                                          |
// This file is the controller for the navbar.                                                              |
//                                                                                                          |         
// Author: wreyne                                                                                           |         
// Date: 1 June 2017                                                                                        |         
// ---------------------------------------------------------------------------------------------------------|
(function() {
    "use strict";
    
    function NavController($mdDialog, $state) {
        var vm = this;
        
        vm.search = function() {
            if(vm.query && /\S/.test(vm.query)) {
                $state.go("search", {"query": vm.query});
            } else {
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector("body")))
                        .clickOutsideToClose(true)
                        .title("Please enter a search query.")
                        .ok("Dismiss")
                );
            }
        };
    }
    
    NavController.$inject = ["$mdDialog", "$state"];
    
    angular
        .module("br.controllers.nav", [])
        .controller("NavController", NavController);
})();
