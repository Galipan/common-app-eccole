'use strict';

angular.module('commonAppEccoleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('schools', {
        url: '/colegios',
        templateUrl: 'app/schools/schools.html',
        controller: 'SchoolsCtrl'
      });
  });
