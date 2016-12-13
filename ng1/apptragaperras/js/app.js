// Create module and needed objects
angular
    .module('app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/ruleta', {
            controller: 'Ctrl1 as vm',
            templateUrl: 'partials/template1.html',
            resolve: {
                images_happy: function(GIFFactory) {
                    return GIFFactory.getHappy();
                },
                images_sad: function(GIFFactory) {
                    return GIFFactory.getSad();
                }
            }
        })

        .when('/route2', {
            controller: 'Ctrl2 as vm',
            templateUrl: 'partials/template2.html',
        })

        .otherwise({
            redirectTo: '/ruleta'
        });

    });
