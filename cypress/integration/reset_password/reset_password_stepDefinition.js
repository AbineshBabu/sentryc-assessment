/// <reference types="cypress"/>

import { When, Then} from 'cypress-cucumber-preprocessor/steps';
import { Reset } from '../../pageobjects/reset_password';
const resetPassword = new Reset();

var expectedErrorMessage;

When('user clicks on send email button', () => {
    resetPassword.clickSendEmail();
})

When('user enter invalid format of email address', (datatable) => {
    datatable.hashes().forEach( element => {
        resetPassword.enterEMail(element.invalidEmailAddress);
    })
})

When('user enter valid format of email address', (datatable) => {
    datatable.hashes().forEach( element => {
        resetPassword.enterEMail(element.validEmailAddress);
    })
})

When('user clicks on the Back to Login link', () => {
    resetPassword.clickBackToLogin();
})

Then('system should display the error message', (datatable) => {
    datatable.hashes().forEach(element => {
        expectedErrorMessage = element.message;
        resetPassword.elements.EMailErrorMessage().then((value) => {
            var actualErrorMessage = value.text();
            expect(expectedErrorMessage).to.equal(actualErrorMessage);
        })
    });
})

Then('system should navigate to login page', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.url().should('eq',element.url);
    })
})

Then('system should display the error message below E-mail field', (datatable) => {
    datatable.hashes().forEach(element => {
        expectedErrorMessage = element.message;
        resetPassword.elements.EMailErrorMessage().then((value) => {
            var eMailErrorMessage = value.text();
            expect(expectedErrorMessage).to.equal(eMailErrorMessage);
        })
    })  
})

Then('system should display error message in popup', (datatable) => {
    datatable.hashes().forEach(element => {
        expectedErrorMessage = element.message;
        resetPassword.elements.popupMessage().then((value) => {
            var popoupErrorMessage = value.text();
            expect(expectedErrorMessage).to.equal(popoupErrorMessage);
        })
    })  
})