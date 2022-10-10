# sentryc-assessment

A Cypress Automation Test Framework with cucumber to validate the login and forgot password page of the given application

## Table of contents

* Getting started
  * Prerequisites
  * Installation
  * Folder Structure
  
* How to run the tests
  * Test execution
  
### Prerequisites

- [Node.js](https://nodejs.org/) v16.17.1 - should be installed in the machine.


### Installation

 1) Clone the repository using below steps,

 ```sh
 git clone https://github.com/AbineshBabu/sentryc-assessment.git
 ```

 2) Install dependencies:

 ```sh
 npm install
 ```
 
### Folder Structure

- `integration` - To maintain all the test cases in Gherkin syntax and step definition.
- `pageobjects` - To maintain page elements and page actions.
- `plugins` - To maintain the events listeners. Logs the events.
- `support` - To maintain reusable scripts.
- `cypress.json` - Cypress configurations. Override default values

## How to run the tests

  ### Test execution
 - `npm run test-all` - To execute all the test cases developed in cucumber.
 - `npm run test-login` - To execute all the login test cases developed in cucumber.
 - `npm run test-resetPassword` - To execute all the reset password test cases developed in cucumber.

 ### HTML report with screenshots
   - `npm run generate_report` - To generate the HTML report.
   - HTML Report will be generated inside the following folder,
   `cypress/report`