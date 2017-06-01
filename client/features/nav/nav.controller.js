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
    
    function NavController($state) {
        var vm = this;
        
        vm.search = function() {
            $state.go("search", {"query": vm.query});
        };
    }
    
    NavController.$inject = ["$state"];
    
    angular
        .module("br.controllers.nav", [])
        .controller("NavController", NavController);
})();
