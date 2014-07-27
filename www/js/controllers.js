angular.module('cloudmtd.controllers', [])

.controller('MainCtrl', function($scope) {
})

.controller('RouteCtrl', function($scope, RouteList) {
	RouteList.getData().then(

		// on Success
		function(resp) {
	        $scope.routes = resp.data.routes;
	    },

	    // error
	    function(resp){
	    	alert("There was an error with the request. ERR_" + resp.status);
	    }
    );
})

.controller('RouteDetailCtrl', function($scope, $stateParams) {
  //$scope.friend = Friends.get($stateParams.friendId);
})

.controller('CloudCtrl', function($scope, Friends) {

})

.controller('SettingCtrl', function($scope) {
});
