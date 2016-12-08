'use strict';

describe('Controller: MenubarCtrl', function () {

  // load the controller's module
  beforeEach(module('appseriesApp'));

  var MenubarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenubarCtrl = $controller('MenubarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MenubarCtrl.awesomeThings.length).toBe(3);
  });
});
