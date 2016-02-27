var app = require('app');

var service = app.factory('loginService', ['$resource', function($resource) {
  return {
    logIn : function() {
      var login = $resource('/account/login');
      login.get({}, function(response) {
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
