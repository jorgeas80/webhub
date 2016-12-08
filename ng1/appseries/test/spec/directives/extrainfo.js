'use strict';

describe('Directive: extrainfo', function () {

  // load the directive's module
  beforeEach(module('appseriesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<extrainfo></extrainfo>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the extrainfo directive');
  }));
});
