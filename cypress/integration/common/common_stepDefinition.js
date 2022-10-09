/// <reference types="cypress"/>

import { Given, When } from 'cypress-cucumber-preprocessor/steps';

Given('user access the application', () => {
    cy.login();
})

When('user navigates to reset password page', () => {
    cy.navigateToResetPasswordPage();
})
