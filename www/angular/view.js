'use strict';

angular.module('View', [])
.controller('LiveTrackingController', function ($scope) {
    $scope.title = 'Live Tracking';
})
.controller('DataController', function ($scope) {
    $scope.title = 'Data';
});
