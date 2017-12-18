//This file describes the elements on the "Sign In" screen.

'use strict';

var SignInPage = function() {

    this.userName = function(value1) {
        $('form[name="login-form"]').element(by.id('username')).sendKeys(value1);
    };

    this.password = function(value2) {
        $('form[name="login-form"]').element(by.id('password')).sendKeys(value2);
    };

    this.signInButton = $('form[name="login-form"]').element(by.id('btnLoginSubmit'));

};

module.exports = new SignInPage();