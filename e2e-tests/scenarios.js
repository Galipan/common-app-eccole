'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /parents when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/parents");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/parents');
    });


    it('should render parents when user navigates to /parents', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('schools', function() {

    beforeEach(function() {
      browser.get('index.html#/schools');
    });


    it('should render schools when user navigates to /schools', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
