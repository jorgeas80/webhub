'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('appseriesApp'));

  var MainCtrl,
    serviceMock, rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q, _tvmaze_) {

    // Mock the real service
    serviceMock = _tvmaze_;

    serviceMock.getReleasesOf = function() {
      var deferred = $q.defer();
      var result = {
        data: [1, 2, 3]
      };
      deferred.resolve(result);
      return deferred.promise;
    };

    rootScope = $rootScope;

    MainCtrl = $controller('MainCtrl', {
      $rootScope: rootScope,
      $scope: $rootScope.$new(),
      tvmaze: serviceMock
    });
  }));

  it('Start with default values', function () {

    // After Angular 1.2.5: be sure to use `toEqual` and not `toBe`
    // as the object will be a copy and not the same instance.
    expect(MainCtrl.dateformat).toEqual("yyyy-MM-dd");
    expect(MainCtrl.d.getDate()).toEqual(new Date().getDate());
    expect(MainCtrl.popup.opened).toEqual(false);
    expect(MainCtrl.orderBy).toEqual("show.name");
    expect(MainCtrl.reverse).toEqual(false);
    expect(MainCtrl.searchTerm).toEqual({});
    expect(MainCtrl.series_today).toEqual([]);
  });


  it('Async service updates list', function() {

    // MainCtrl.getReleasesOf method will use it
    MainCtrl.d = new Date();

    // Make the async call
    MainCtrl.getReleasesOf();

    // Propagate promise resolution to 'then' functions using $apply().
    rootScope.$apply();

    // Assert expected result
    expect(MainCtrl.series_today).toEqual([1, 2, 3]);    
  });


  it('MainCtrl correctly receives data emited from rootScope', function() {
    // Emit message
    var value = {
      show: {
        name: "foo"
      }
    };
    
    rootScope.$emit('MenubarCtrl:rootScope:emit', value);

    // Check expected values in MainCtrl
    expect(MainCtrl.searchTerm).toEqual(value);
    expect(MainCtrl.showPagination).toEqual(false);
  });
});
