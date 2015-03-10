// spec.js
describe('a static email', function() {
  it('should have a title', function() {
    browser.get('http://protractor-no-angular.dev');

    expect(browser.getTitle()).toEqual('Email Builder Test');
  });
});
