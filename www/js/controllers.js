angular.module('cloudmtd.controllers', [])

.controller('MainCtrl', function($scope) {
})

.controller('RouteCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('RouteDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('CloudCtrl', function($scope, Friends) {

})

.controller('SettingCtrl', function($scope) {
});
