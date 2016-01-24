'use strict';

describe('Controller: SchoolsCtrl', function () {

  // load the controller's module
  beforeEach(module('commonAppEccoleApp'));

  var SchoolsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SchoolsCtrl = $controller('SchoolsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
