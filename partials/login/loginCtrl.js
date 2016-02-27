var app = require('app');

var loginCtrl = app.controller('loginCtrl', ['$scope', 'loginService', 'appService', function($scope, loginService, appService) {

  $scope.testBackendConnectivity = function() {
    appService.testBackendConnectivity();
  }

}]);

module.exports = loginCtrl;
