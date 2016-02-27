var angular = require('angular');
require('angular-ui-router');
require('angular-resource');

var app = angular.module('app', ['ui.router', 'ngResource']);

app.config(function($stateProvider, $urlRouterProvider, $resourceProvider) {

  $urlRouterProvider.otherwise('login');

  $stateProvider
  .state('login', {
    url: '/login',
    views: {
      'login': {
        templateUrl: '../../partials/login/login.html',
        controllerUrl: '../../partials/login/loginCtrl.js'
      }
    }
  })
  .state('doctor', {
    url: '/doctor',
    views: {
      'doctor': {
        templateUrl: '../../partials/doctor/doctor.html',
        controllerUrl: '../../partials/doctor/doctorCtrl.js'
      }
    }
  })
  .state('patient', {
    url: '/patient',
    views: {
      'patient': {
        templateUrl: '../../partials/patient/patient.html',
        controllerUrl: '../../partials/patient/patientCtrl.js'
      }
    }
  });

});

module.exports = app;
