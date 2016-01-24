'use strict';

angular.module('commonAppEccoleApp.auth', [
  'commonAppEccoleApp.constants',
  'commonAppEccoleApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
