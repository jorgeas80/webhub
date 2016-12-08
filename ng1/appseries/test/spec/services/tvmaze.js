'use strict';

describe('Service: tvmaze', function () {

  // load the service's module
  beforeEach(module('appseriesApp'));

  // Get mock backend and service
  var tvmaze;
  var httpBackend;
  
  beforeEach(inject(function ($httpBackend, _tvmaze_) {
    httpBackend = $httpBackend;
    tvmaze = _tvmaze_;
  }));

  // make sure no expectations were missed in your tests.
  // (e.g. expectGET or expectPOST)
  // This is to verify that all HTTP requests were made and there are none to be flushed
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should send HTTP GET request and get a response', function () {
    
    // As we are NOT doing a real HTTP request, just define some fake response data
    var returnData = { foo: "bar" };

    var date = new Date();

    // Get str representation of date
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();

    if (mm < 10)
      mm = '0' + mm;

    if (dd < 10)
      dd = '0' + dd;

    var strDate = [date.getFullYear(), mm, dd].join('-');

    // expectGET to make sure this is called once.
    httpBackend.expectGET('http://api.tvmaze.com/schedule?country=US&date=' + strDate).respond(returnData);

    // make the call.
    var returnedPromise = tvmaze.getReleasesOf(new Date());

    // set up a handler for the response, that will put the result
    // into a variable in this scope for you to test.
    var result;
    returnedPromise.then(function(response) {
      result = response;
    });

    // flush the backend to "execute" the request to do the expectedGET assertion.
    httpBackend.flush();
    
    // check the result. 
    // (after Angular 1.2.5: be sure to use `toEqual` and not `toBe`
    // as the object will be a copy and not the same instance.)
    expect(result.data).toEqual(returnData);

  });

});
