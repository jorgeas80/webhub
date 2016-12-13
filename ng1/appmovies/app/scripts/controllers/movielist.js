(function () {

  'use strict';

  /**
   * @ngdoc function
   * @name ng1MoviesApp.controller:MovielistCtrl
   * @description
   * # MovielistCtrl
   * Controller of the ng1MoviesApp
   */
  angular.module('ng1MoviesApp')
    .controller('MovielistCtrl', MovieListCtrl);

  function MovieListCtrl($window, Movie, Popup) {
    var vm = this;

    this.movies = Movie.query();

    this.deleteMovie = function (movie) {
      if (Popup.showPopup('Really delete this?')) {
        movie.$delete(function () {
          $window.location.href = '';
        });
      }
    }
  }

})();
