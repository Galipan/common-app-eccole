'use strict';

describe('Controller: ParentsCtrl', function () {

  // load the controller's module
  beforeEach(module('commonAppEccoleApp'));

  var ParentsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParentsCtrl = $controller('ParentsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
