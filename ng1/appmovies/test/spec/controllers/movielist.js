'use strict';

describe('Controller: MovielistCtrl', function () {

  // load the controller's module
  beforeEach(module('ng1MoviesApp'));

  var MovielistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovielistCtrl = $controller('MovielistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovielistCtrl.awesomeThings.length).toBe(3);
  });
});
