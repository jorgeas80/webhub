'use strict';

/**
 * @ngdoc component
 * @name appseriesApp.component:starrating
 * @description
 * # starrating
 */
angular.module('appseriesApp')
  .component('starRating', {
      bindings: {
        r: '<'
      },

      template: [
        '<ul class="star-rating">',
          '<li ng-repeat="star in $ctrl.stars track by $index" class="star">',
            '<i ng-if="star" class="glyphicon glyphicon-star"></i>',
            '<i ng-if="!star" class="glyphicon glyphicon-star-empty"></i>',
          '</li>',
        '</ul>'
      ].join(''),
      
      controller: function() {
        this.stars = new Array(10); // 10 stars maximum
                
        // Security check
        if (!this.r) {
          this.r = 0;
        }

        for(var i = 0; i < this.stars.length; i++) {
          this.stars[i] = (i < this.r);
        }
      }
      
  });
