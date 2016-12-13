(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name ng1MoviesApp.controller:MoviecreateCtrl
   * @description
   * # MoviecreateCtrl
   * Controller of the ng1MoviesApp
   */
  angular.module('ng1MoviesApp')
    .controller('MoviecreateCtrl', MovieCreateCtrl);


  function MovieCreateCtrl($state, Movie) {
    var vm = this;

    vm.movie = new Movie();

    vm.addMovie = function () {
      vm.movie.$save(function () {
        $state.go('movies');
      });
    }
  }

})();
