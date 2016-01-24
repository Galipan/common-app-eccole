'use strict';

angular.module('commonAppEccoleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('parents', {
        url: '/parents',
        templateUrl: 'app/parents/parents.html',
        controller: 'ParentsCtrl'
      });
  });
