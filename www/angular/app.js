'use strict';

angular.module('View', []);

angular.module('Index', ['View', 'ngRoute'])
.controller('IndexController', function($rootScope){
    $rootScope.title='';
})
.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/livetracking', {
        controller: 'LiveTrackingController',
        templateUrl: 'views/livetracking.html'
    })
    .when('/distance', {
        controller: 'TravelDistanceController',
        templateUrl: 'views/traveldistance.html'
    })
    .when('/routes', {
        controller: 'RouteController',
        templateUrl: 'views/routes.html'
    })
    .when('/speed', {
        controller: 'SpeedController',
        templateUrl: 'views/speedanalysis.html'
    })
    .when('/', {
        redirectTo: '/livetracking'
    })
    .otherwise({
        redirectTo: '/'
    });
});
