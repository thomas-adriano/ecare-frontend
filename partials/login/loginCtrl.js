var app = require('app');

var loginCtrl = app.controller('loginCtrl', ['$scope', 'loginService', 'appService', function($scope, loginService, appService) {

  $scope.logIn = function(user) {
    loginService.logIn(user);
  }

}]);

module.exports = loginCtrl;
