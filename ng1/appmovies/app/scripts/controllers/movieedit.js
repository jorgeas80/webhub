(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name ng1MoviesApp.controller:MovieeditCtrl
   * @description
   * # MovieeditCtrl
   * Controller of the ng1MoviesApp
   */
  angular.module('ng1MoviesApp')
    .controller('MovieeditCtrl', MovieEditCtrl);

  function MovieEditCtrl($state, $stateParams, Movie) {
    var vm = this;

    vm.updateMovie = function () {
      vm.movie.$update(function () {
        $state.go('movies');
      });
    };

    vm.loadMovie = function () {
      vm.movie = Movie.get({
        id: $stateParams.id
      });
    };

    vm.loadMovie();
  }
})();
