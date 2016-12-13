(function () {

  'use strict';

  /**
   * @ngdoc service
   * @name ng1MoviesApp.Movie
   * @description
   * # Movie
   * Service in the ng1MoviesApp.
   */
  angular.module('ng1MoviesApp')
    .factory('Movie', MovieService);

  function MovieService($resource) {
    return $resource('http://localhost:3000/movies/:id', {
      id: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }

})();
