/// <reference types="cypress"/>

import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

Given('user access the application', () => {
    cy.login();
})

When('user navigates to reset password page', () => {
    cy.navigate_to_resetPassword_page();
})
