'use strict';

angular.module('commonAppEccoleApp', [
  'commonAppEccoleApp.auth',
  'commonAppEccoleApp.admin',
  'commonAppEccoleApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
