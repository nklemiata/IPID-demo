//This file describes the elements on the "Home" page.

'use strict';

var widgets = $('ngx-home').$('widget-deck');
var barChart = widgets.$('ca-ideas-chart');

var HomePage = function() {

    this.clientLabel = $('ca-client-label').$('.client-name');
    this.widget = widgets.$$('widget');
    this.ideasCounter = widgets.$$('.view-count');
    this.viewNowButton = widgets.$$('button.ca-button--primary');
    this.ideasChart = widgets.$('ca-ideas-chart');
    this.draftBar = barChart.$('path[stroke="#1a78c2"]');
    this.underReviewBar = barChart.$('path[stroke="#cc6631"]');
    this.underRevisionBar = barChart.$('path[stroke="#202a76"]');
    this.approvedBar = barChart.$('path[stroke="#11925f"]');
    this.declinedBar = barChart.$('path[stroke="#c12a39"]');
    this.removedBar = barChart.$('path[stroke="#8e8e93"]');
    this.missingIDTile = widgets.$('.dashboard__missing-disclosure-ids-count-widget');
    this.statusTrendsChart = widgets.$('ca-status-trends-chart');
    this.adminStatsChart = widgets.$('ca-admin-statistics');
    this.draftTile = widgets.$('.dashboard__drafts-count-widget');
    this.underRevisionTile = widgets.$('.dashboard__under-revision-count-widget');
    this.underReviewTile = widgets.$('.dashboard__pending-count-widget');

};

module.exports = new HomePage();