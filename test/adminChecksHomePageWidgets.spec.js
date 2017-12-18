'use strict';

var homePage = require('../page/homePage.js');

describe('To verify the widgets on the "Home" page avaliable for Admin', function() {

    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.driver.sleep(1000);
    });

    afterEach(function() {
        browser.driver.sleep(1000);
        console.log();
    });

    //Tiles
    it('the User should check that the "Draft" tile is NOT present', function() {
        expect(homePage.draftTile.isPresent()).toBe(false);
    });

    it('the User should check that the "Under revision" tile is NOT present', function() {
        expect(homePage.underRevisionTile.isPresent()).toBe(false);
    });

    it('the User should check that the "Under review" tile is NOT present', function() {
        expect(homePage.underReviewTile.isPresent()).toBe(false);
    });

    it('the User should check that the "Missing disclosure ID(s)" tile is displayed', function() {
        expect(homePage.missingIDTile.isDisplayed()).toBeTruthy;
    });

    //Bar charts
    it('the User should check that the "Status" bar chart is displayed', function() {
        expect(homePage.ideasChart.isDisplayed()).toBeTruthy;
    });

    it('the User should check that the bar chart by business unit(s)/inventor(s) is displayed', function() {
        expect(homePage.adminStatsChart.isDisplayed()).toBeTruthy;
    });

    //Graphs
    it('the User should check that the "Trend line" graph is displayed', function() {
        expect(homePage.statusTrendsChart.isDisplayed()).toBeTruthy;
    });

});