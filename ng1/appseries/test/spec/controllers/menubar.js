'use strict';

describe('Controller: MenubarCtrl', function () {

  // load the controller's module
  beforeEach(module('appseriesApp'));

  var MenubarCtrl,
    rootScope, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    rootScope = $rootScope;

    MenubarCtrl = $controller('MenubarCtrl', {
      $rootScope: rootScope,
      // place here mocked dependencies
    });
  }));

  it('should start with an empty search term', function () {
    expect(MenubarCtrl.searchTerm).toEqual({});
  });

  it('should emit search term', function() {
    var result;
    var st = {
      show: {
        name: "foo"
      }
    };

    var listener = rootScope.$on('MenubarCtrl:rootScope:emit', function (event, data) {
      result = data;
    });
    scope = rootScope.$new();

    MenubarCtrl.searchTerm = st;
    MenubarCtrl.emitSearchTerm();

    expect(result).toEqual(st);

    // Need to explicitly destroy listener
    scope.$on('$destroy', listener);
  });


});
