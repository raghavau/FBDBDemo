'use strict';

var cities = [
    {
        city : 'KPCL',
        desc : "India's largest port on the horizon",
        lat : 14.2601015,
        long : 80.114087
    }
];

angular.module('View', [])
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
})
.controller('MapController', function($scope) {
    debugger;
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(14.2601015, 80.114087),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function (info){

        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

    }

    for (var i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }
});
