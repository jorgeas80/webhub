'use strict';

/**
 * @ngdoc function
 * @name appseriesApp.controller:MenubarCtrl
 * @description
 * # MenubarCtrl
 * Controller of the appseriesApp
 */
angular.module('appseriesApp')
  .controller('MenubarCtrl', function ($rootScope) {
    // Capturing this environment at first: https://johnpapa.net/angularjss-controller-as-and-the-vm-variable/
    var vm = this;

    // To filter search
    vm.searchTerm = {};

    // Method called when the input search changes.
    vm.emitSearchTerm = function () {

      // Send a message to a controller which is out of our hierarchy
      $rootScope.$emit('MenubarCtrl:rootScope:emit', vm.searchTerm);
    }
  });
