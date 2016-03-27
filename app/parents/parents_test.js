'use strict';

describe('myApp.parents module', function() {

  beforeEach(module('myApp.view1'));

  describe('parents controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});