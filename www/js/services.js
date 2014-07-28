angular.module('cloudmtd.services', [])

.factory('Location', function($http){

  // allow cors
  delete $http.defaults.headers.common['X-Requested-With'];

  return {
    addr : function(lat,lng) {
      return $http({
          method: 'GET',
          url: 'https://maps.googleapis.com/maps/api/geocode/json' +
          '?latlng=' + lat + ',' + lng + '&' +
          '?key=AIzaSyAY0y7uKpLfmfP_XGFeCBYTFxYrjTmtUHE&'
       });
    }
  }

})

.factory('RouteList', function($http) {

  // allow cors
  delete $http.defaults.headers.common['X-Requested-With'];

  return {
    all : function() {
      return $http({
          method: 'GET',
          url: 'https://developer.cumtd.com/api/v2.2/json/GetRoutes' +
          '?key=a1918356803e4ac5b605b11d3329f0e8'
       });
    }
  }

});