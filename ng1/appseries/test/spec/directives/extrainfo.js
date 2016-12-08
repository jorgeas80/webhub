'use strict';

describe('Directive: extrainfo', function () {

  // load the directive's module
  beforeEach(module('appseriesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should add the correct class to the DOM element', inject(function ($compile) {
    
    element = angular.element('<div extra-info data-status="Running">Foo</div>');
    element = $compile(element)(scope);

    expect(element.hasClass("alert-success")).toEqual(true);
  }));
});
