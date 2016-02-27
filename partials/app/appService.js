var app = require('app');

var service = app.factory('appService', ['$resource', function($resource) {
  return {
    testBackendConnectivity : function() {
      var status = $resource('/status');
      status.get({}, function(response) {
        console.log('success!');
        console.log(JSON.stringify(response))
      }, function(response) {
        console.log('error')
        console.log(JSON.stringify(response))
      });
    }
  }

}]);

module.exports = service;
