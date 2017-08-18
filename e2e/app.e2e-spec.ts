import { browser, element, by } from 'protractor';

describe('Page loaded', function () {

  let expectedMsg = 'MENU';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
      console.log(element(by.css('.menu')).getText());
    expect(element(by.css('.menu')).getText()).toEqual(expectedMsg);
  });

});
