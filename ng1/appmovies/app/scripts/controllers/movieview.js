(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name ng1MoviesApp.controller:MovieviewCtrl
   * @description
   * # MovieviewCtrl
   * Controller of the ng1MoviesApp
   */
  angular.module('ng1MoviesApp')
    .controller('MovieviewCtrl', MovieViewCtrl);


  function MovieViewCtrl($stateParams, Movie) {
    var vm = this;

    vm.movie = Movie.get({
      id: $stateParams.id
    });
  }

})();
