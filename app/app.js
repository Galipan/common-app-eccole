'use strict';

// Declare app level module which depends on views, and components
angular.module('aplicaleApp', [
    'ui.router',
    'aplicaleApp.menu',
    'aplicaleApp.parents',
    'aplicaleApp.schools',
    'aplicaleApp.admin'
]).
config( function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/colegios");

    $stateProvider
        .state('parents', {
            url: '/padres',
            templateUrl: 'parents/parents.html',
            controller: 'parentsCtrl',
            data: {
                user: {
                    name: 'Carlos Valderrama',
                    username: 'cvalderrama',
                    role: 'parent'
                }
            }
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
