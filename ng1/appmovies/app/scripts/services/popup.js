(function () {

  'use strict';

  /**
   * @ngdoc service
   * @name ng1MoviesApp.Popup
   * @description
   * # Popup
   * Service in the ng1MoviesApp.
   */
  angular.module('ng1MoviesApp')
    .service('Popup', PopupService);


  function PopupService($window) {
    this.showPopup = function (message) {
      return $window.confirm(message);
    }
  }

})();
