'use strict';

describe('Controller: MoviecreateCtrl', function () {

  // load the controller's module
  beforeEach(module('ng1MoviesApp'));

  var MoviecreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoviecreateCtrl = $controller('MoviecreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MoviecreateCtrl.awesomeThings.length).toBe(3);
  });
});
