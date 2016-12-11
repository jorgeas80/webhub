/// <reference path="../../../node_modules/@types/angular/index.d.ts" />

'use strict';

/**
 * @ngdoc function
 * @name appseriesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appseriesApp
 */
angular.module('appseriesApp')
  .controller('MainCtrl', function ($rootScope, $scope, tvmaze) {

    var vm = this;

    // Will store the array of episodes
    vm.series_today = [];


    ///////////////////////// Pagination stuff
    vm.viewby = 10;
    vm.currentPage = 1;
    vm.itemsPerPage = vm.viewby;
    vm.itemsPerPageOptions = [3, 5, 10, 20, 30, 40, 50];
    vm.showPagination = true;

    //////////////////////// Date picker stuff
    vm.dateOptions = {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      startingDay: 1
    };

    vm.dateformat = "yyyy-MM-dd";

    vm.popup = {
      opened: false
    };

    // Default
    vm.d = new Date();

    vm.pageChanged = function () {
      console.log('Page changed to: ' + vm.currentPage);
    };

    vm.setItemsPerPage = function (num) {
      vm.itemsPerPage = num;
      vm.currentPage = 1; //reset to first page
    };

    ////////////////////////// Sort table stuff
    vm.orderBy = "show.name";
    vm.reverse = false;

    vm.setOrder = function(orderby) {
      if (orderby === vm.orderBy) {
        vm.reverse = !vm.reverse;
      }
      vm.orderBy = orderby;
    };

    vm.seriesFilterFnByRating = function(serie) {
      return (!serie.show.rating.average) ? 0 : parseFloat(serie.show.rating.average);
    };

    // This is to filter the search table
    vm.searchTerm = {};

    // Listen to menubarctrl, which contains the search term
    var listener = $rootScope.$on('MenubarCtrl:rootScope:emit', function (event, data) {
      vm.searchTerm = data;

      // Disable pagination for searchs. Improvement: also paginate the search results
      vm.showPagination = vm.searchTerm.show.name.length <= 0;
    });

    // Need to explicitly destroy listener
    $scope.$on('$destroy', listener);

    ///////////////////////// Rest of stuff

    // Get JSON with today releases in USA
    vm.getReleasesOf = function() {
      vm.series_today = [];

      tvmaze.getReleasesOf(vm.d).then(
            // successful
            function (response) {
              vm.series_today = response.data;
            },

            // Error
            function () {
              vm.series_today = [];
            }
          );
    };
  });
