'use strict';

describe('Filter: startFrom', function () {

  // load the filter's module
  beforeEach(module('appseriesApp'));

  // initialize a new instance of the filter before each test
  var startFrom;
  beforeEach(inject(function ($filter) {
    startFrom = $filter('startFrom');
  }));

  it('should return a sliced version of the input array', function () {
    var input = [0, 1, 2, 3, 4 , 5, 6, 7, 8, 9];
    expect(startfrom(input, 4)).toEqual([4, 5, 6, 7, 8, 9]);
  });

});
