'use strict';

describe('Controller: MovieeditCtrl', function () {

  // load the controller's module
  beforeEach(module('ng1MoviesApp'));

  var MovieeditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieeditCtrl = $controller('MovieeditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovieeditCtrl.awesomeThings.length).toBe(3);
  });
});
