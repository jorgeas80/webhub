angular
  .module('app')
  .constant('apikey', 'dc6zaTOxFJmzC')
  .constant('baseUrl', 'http://api.giphy.com/v1/gifs/search')
  .factory('GIFFactory', function ($http, apikey, baseUrl) {
    var f = {};

    var getGif = function (sentiment) {
      return $http
        .get(baseUrl, {
          params: {
            'q': sentiment,
            'api_key': apikey,
            'limit': 100,
            'offset': 0
          }
        });
    }

    f.getSad = function () {
      var images = [];
      return getGif('sad')
        .then(function (response) {
            response.data.data.forEach(function(element) {
                images.push(element.images.downsized_large.url);
            });
    
          return images;
        });
    };

    f.getHappy = function () {
      var images = [];
      return getGif('happy')
        .then(function (response) {
            response.data.data.forEach(function(element) {
                images.push(element.images.downsized_large.url);
            });
    
          return images;
        });
    };

    return f;
  })
