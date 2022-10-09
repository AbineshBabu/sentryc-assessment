/// <reference types="cypress"/>

import { When, Then} from 'cypress-cucumber-preprocessor/steps';
import { Login } from '../../pageobjects/login';

const login =new Login();

var expectedErrorMessage;

var invalidEmailAddress;


When('user enter valid email address', (datatable) => {
    datatable.hashes().forEach( element => {
        login.enterEMail(element.emailAddress);
    })
})

When('user enter valid password', (datatable) => {
    datatable.hashes().forEach( element => {
        login.enterPassword(element.password);
    })
})

When('user enter valid email address and password', (datatable) => {
    datatable.hashes().forEach( element => {
        login.enterEMail(element.emailAddress);
        login.enterPassword(element.password);
    })
})

When('user enter invalid format of email address', (datatable) => {
    datatable.hashes().forEach( element => {
        login.enterEMail(element.invalidEmailAddress);
    })
})

When('user clicks on the forgot your password link', () => {
    login.clickForgotYourPassword();
})

When('user clicks on the login button', () => {
    cy.enterLogin();
})

Then('system should display the error message', (datatable) => {
    datatable.hashes().forEach(element => {
        expectedErrorMessage = element.message;
        login.elements.EMailMandatoryErrorMessage().then((value) => {
            var eMailErrorMessage = value.text();
            expect(expectedErrorMessage).to.equal(eMailErrorMessage);
        })
        login.elements.passwordMandatoryErrorMessage().then((value) => {
            var passwordErrorMessage = value.text();
            expect(expectedErrorMessage).to.equal(passwordErrorMessage);
        })
    })  
})

Then('system should display the error message below password field', (datatable) => {
    datatable.hashes().forEach(element => {
        expectedErrorMessage = element.message;
        login.elements.passwordMandatoryErrorMessage().then((value) => {
            var passwordErrorMessage =value.text();
            expect(expectedErrorMessage).to.equal(passwordErrorMessage);
        })
    })  
})

Then('system should display the error message below E-mail field', (datatable) => {
    datatable.hashes().forEach(element => {
        expectedErrorMessage = element.message;
        login.elements.EMailMandatoryErrorMessage().then((value) => {
            var eMailErrorMessage =value.text();
            expect(expectedErrorMessage).to.equal(eMailErrorMessage);
        })
    })  
})

Then('system should display error message in popup', (datatable) => {
    datatable.hashes().forEach(element => {
        expectedErrorMessage = element.message;
        login.elements.popupMessage().then((value) => {
            var popoupErrorMessage =value.text();
            expect(expectedErrorMessage).to.equal(popoupErrorMessage);
        })
    })  
})

Then('system should navigate to reset password page', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.url().should('eq',element.url);
    })
})