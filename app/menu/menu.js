'use strict';

var angularApply = function ($scope, doIt) {
    if (!$scope.$$phase) {
        $scope.$apply(doIt);
    } else {
        doIt();
    }
};

var getNestedProperty = function (obj, nestedProperty) {
    var nextLevel = nestedProperty.split('.')[0];
    var remainingLevels = nestedProperty.substring(nextLevel.length + 1, nestedProperty.length);

    var childObj = obj[nextLevel];
    if (remainingLevels.length > 0) {
        if (childObj) {
            return getNestedProperty(childObj, remainingLevels);
        } else {
            return null;
        }
    }
    return childObj;
};

var scopeHijack = {};

angular.module('aplicaleApp.menu', ['ui.bootstrap'])

    .controller('MenuCtrl', ['$scope', '$timeout', '$compile', function($scope, $timeout, $compile) {

        $scope.topNavs = [
            {
                title: 'Para colegios',
                id: 'schools',
                icon: 'glyphicon glyphicon-apple',
                maxHeight: 340,
                state: 'schools'
            },
            {
                title: 'Para papas',
                id: 'parents',
                icon: 'glyphicon glyphicon-user',
                maxHeight: 166,
                state: 'parents'
            },
            {
                title: 'Admins',
                id: 'admin',
                icon: 'glyphicon glyphicon-wrench',
                maxHeight: 460,
                state: 'admin'
            }
        ];

        $scope.setup = function() {

            $scope.leftCollapsed = false;

        };

        $scope.getNavClasses = function() {
            var result = 'apply-version-' + $scope.selectedVersion;
            if($scope.useExplorerPagesMenu) {
                result += ' apply-explorer-version';
            } else {
                result += ' apply-super-pages-version';
            }
            return result;
        };

        scopeHijack.NavController = $scope;

    }]);