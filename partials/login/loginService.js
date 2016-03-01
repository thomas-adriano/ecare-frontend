var app = require('app');

var service = app.factory('loginService', ['$resource', '$state', function($resource, $state) {
  return {
    logIn : function() {
      $state.go('doctor');
      // var login = $resource('/account/login');
      // login.get({}, function(response) {
      //   console.log('success!');
      //   console.log(JSON.stringify(response))
      // }, function(response) {
      //   console.log('error')
      //   console.log(JSON.stringify(response))
      // });
    }
  }

}]);

module.exports = service;
