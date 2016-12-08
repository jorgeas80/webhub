'use strict';

describe('Service: tvmaze', function () {

  // load the service's module
  beforeEach(module('appseriesApp'));

  // instantiate service
  var tvmaze;
  beforeEach(inject(function (_tvmaze_) {
    tvmaze = _tvmaze_;
  }));

  it('should do something', function () {
    expect(!!tvmaze).toBe(true);
  });

});
