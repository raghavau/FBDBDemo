'use strict';

angular.module('View')

    .controller('LiveTrackingController', function ($scope) {
        $scope.title = 'Live Tracking';
    })
    .controller('TravelDistanceController', function ($scope) {
        $scope.title = 'Tour Distance';
    })
    .controller('RouteController', function ($scope) {
        $scope.title = 'Routes';
    })
    .controller('SpeedController', function ($scope) {
        $scope.title = 'Speed Analysis';
});
