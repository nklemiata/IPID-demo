'use strict';

var EC = protractor.ExpectedConditions;

var helper = require('../page/helper.js');
var signInPage = require('../page/signInPage.js');

describe('To login as an Admin', function() {

    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.driver.sleep(1000);
    });

    afterEach(function() {
        browser.driver.sleep(1000);
        console.log();
    });

    it('the User should enter "Username", "Password" and click "Sign in" button', function() {
        browser.get('https://qa-ideaportal.ipmanagementsolution.com/ui');
        signInPage.userName(helper.admin);
        signInPage.password(helper.password);
        signInPage.signInButton.click();
        browser.wait(EC.urlContains('https://qa-ideaportal.ipmanagementsolution.com/ui/dashboard'), 30000);
    });

});