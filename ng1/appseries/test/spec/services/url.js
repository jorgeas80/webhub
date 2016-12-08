'use strict';

describe('Service: url', function () {

  // load the service's module
  beforeEach(module('appseriesApp'));

  // instantiate service
  var url;
  beforeEach(inject(function (_url_) {
    url = _url_;
  }));

  it('URL should exist', function () {
    expect(!!url).toBe(true);
  });

  it('URL should point to TVMaze API', function() {
    expect(url).toBe("http://api.tvmaze.com/schedule?country=US");
  });

});
