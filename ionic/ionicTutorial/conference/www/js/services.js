/**
 * Created by jorgeas80 on 4/6/16.
 */
angular
  .module('starter.services', ['ngResource'])
  .factory('Session', function($resource) {
    return $resource('http://localhost:5000/sessions/:sessionId');
  });
