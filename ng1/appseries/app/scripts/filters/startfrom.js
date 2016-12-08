'use strict';

/**
 * @ngdoc filter
 * @name appseriesApp.filter:startFrom
 * @function
 * @description
 * # startFrom
 * Filter in the appseriesApp.
 */
angular.module('appseriesApp')
  .filter('startFrom', function () {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    };
  });
