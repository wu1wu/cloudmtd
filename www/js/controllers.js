angular.module('cloudmtd.controllers', [])

.controller('MainCtrl', function($scope, Location) {

 	navigator.geolocation.getCurrentPosition(
 		function(pos) {
			Location.addr(pos.coords.latitude,pos.coords.longitude).then(
				function(resp) {
					$scope.lat = pos.coords.latitude;
					$scope.lng = pos.coords.longitude;
					$scope.address = resp.data.results[0].formatted_address;
				}
			)
 		},

 		function(err) {
 			alert("Error fetching gps coordinates");
 		}
 	);
})

.controller('RouteCtrl', function($scope, RouteList) {
	RouteList.all().then(

		// on Success
		function(resp) {
	        $scope.routes = resp.data.routes;
	    },

	    // error
	    function(err){
	    	alert("There was an error with the request. ERR_" + err.status);
	    }
    );
})

.controller('RouteDetailCtrl', function($scope, $stateParams, RouteList) {
	//
})

.controller('CloudCtrl', function($scope) {
	navigator.geolocation.getCurrentPosition(
		function(pos) {
			var mapOptions = {
		      center: new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude),
		      zoom: 13
		    };

		    var map = new google.maps.Map(document.getElementById("map-canvas"),
		        mapOptions);
		},

		function(error) {
			var mapOptions = {
		      center: new google.maps.LatLng(-34.397,150.644),
		      zoom: 13
		    };

		    var map = new google.maps.Map(document.getElementById("map-canvas"),
		        mapOptions);
		}
	);
})

.controller('SettingCtrl', function($scope) {
});
