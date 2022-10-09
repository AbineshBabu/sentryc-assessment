/// <reference types="cypress"/>

import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { Login } from '../../pageobjects/login';

const login =new Login();

var expected_error_message;

var invalid_email_address;


When('user enter valid email address', (datatable) => {
    datatable.hashes().forEach( element => {
        login.enter_E_mail(element.email_address);
    })
})

When('user enter valid password', (datatable) => {
    datatable.hashes().forEach( element => {
        login.enter_password(element.password);
    })
})

When('user enter valid email address and password', (datatable) => {
    datatable.hashes().forEach( element => {
        login.enter_E_mail(element.email_address);
        login.enter_password(element.password);
    })
})

When('user enter invalid format of email address', (datatable) => {
    datatable.hashes().forEach( element => {
        login.enter_E_mail(element.invalid_email_address);
    })
})

When('user clicks on the forgot your password link', () => {
    login.click_forgot_your_password();
})

When('user clicks on the login button', () => {
    cy.enter_login();
})

Then('system should display the error message', (datatable) => {
    datatable.hashes().forEach(element => {
        expected_error_message = element.message;
        login.elements.E_mail_mandatory_error_message().then((value) => {
            var e_mail_error_message = value.text();
            expect(expected_error_message).to.equal(e_mail_error_message);
        })
        login.elements.password_mandatory_error_message().then((value) => {
            var password_error_message = value.text();
            expect(expected_error_message).to.equal(password_error_message);
        })
    })  
})

Then('system should display the error message below password field', (datatable) => {
    datatable.hashes().forEach(element => {
        expected_error_message = element.message;
        login.elements.password_mandatory_error_message().then((value) => {
            var password_error_message =value.text();
            expect(expected_error_message).to.equal(password_error_message);
        })
    })  
})

Then('system should display the error message below E-mail field', (datatable) => {
    datatable.hashes().forEach(element => {
        expected_error_message = element.message;
        login.elements.E_mail_mandatory_error_message().then((value) => {
            var e_mail_error_message =value.text();
            expect(expected_error_message).to.equal(e_mail_error_message);
        })
    })  
})

Then('system should display error message in popup', (datatable) => {
    datatable.hashes().forEach(element => {
        expected_error_message = element.message;
        login.elements.popup_message().then((value) => {
            var popoup_error_message =value.text();
            expect(expected_error_message).to.equal(popoup_error_message);
        })
    })  
})

Then('system should navigate to reset password page', () => {
     cy.url().should('eq','https://d1g5e94sevp1ds.cloudfront.net/reset');
})