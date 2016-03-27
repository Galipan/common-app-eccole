'use strict';

// Declare app level module which depends on views, and components
angular.module('aplicaleApp', [
    'ui.router',
    'aplicaleApp.menu',
    'aplicaleApp.parents',
    'aplicaleApp.schools',
    'aplicaleApp.admin',
    'aplicaleApp.version'
]).
config( function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/colegios");

    $stateProvider
        .state('parents', {
            url: '/padres',
            templateUrl: 'parents/parents.html',
            controller: 'parentsCtrl'
        })
        .state('schools', {
            url: '/colegios',
            templateUrl: 'schools/schools.html',
            controller: 'schoolsCtrl'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'admin/admin.html',
            controller: 'adminCtrl'
        });
});
