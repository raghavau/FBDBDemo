'use strict';

angular.module('View', []);
//angular.module('GoogleMap', []);

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
    .when('/data', {
        controller: 'DataController',
        templateUrl: 'views/data.html'
    })
    .when('/', {
        redirectTo: '/livetracking'
    })
    .otherwise({
        redirectTo: '/'
    });
});
