const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: './cucumber-json',
    pageTitle: 'Sentryc',
    reportName: 'Assessment',
    durationInMS: true,
    displayDuration: true,
    displayReportTime: true,
    hideMetadata: true,
    reportPath: './report/',
});