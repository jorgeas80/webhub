'use strict';

/**
 * @ngdoc overview
 * @name ng1MoviesApp
 * @description
 * # ng1MoviesApp
 *
 * Main module of the application.
 */
angular
  .module('ng1MoviesApp', [
    'ngResource', 'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider.state('movies', {
      url: '/movies',
      templateUrl: 'views/movies.html',
      controller: 'MovielistCtrl as movielistctrl'
    }).state('viewMovie', {
      url: '/movies/:id',
      templateUrl: 'views/movie-view.html',
      controller: 'MovieviewCtrl as movieviewctrl'
    }).state('newMovie', {
      url: '/movies',
      templateUrl: 'views/movie-add.html',
      controller: 'MoviecreateCtrl as moviecreatectrl'
    }).state('editMovie', {
      url: '/movies/:id',
      templateUrl: 'views/movie-edit.html',
      controller: 'MovieeditCtrl as movieditctrl'
    });
  })
  .run(function ($state) {
    $state.go('movies');
  })
