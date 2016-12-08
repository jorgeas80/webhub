'use strict';

/**
 * @ngdoc service
 * @name appseriesApp.tvmaze
 * @description
 * # tvmaze
 * Factory in the appseriesApp.
 */
angular.module('appseriesApp')
  .factory('tvmaze', function ($http, url) {
    var f = {};

    f.getReleasesOf = function (date) {

      // Get str representation of date
      var mm = date.getMonth() + 1; // getMonth() is zero-based
      var dd = date.getDate();

      if (mm < 10)
        mm = '0' + mm;

      if (dd < 10)
        dd = '0' + dd;

      var strDate = [date.getFullYear(), mm, dd].join('-');

      var fullUrl = url + "&date=" + strDate;
      return $http.get(fullUrl);
    }

    return f;
  });
