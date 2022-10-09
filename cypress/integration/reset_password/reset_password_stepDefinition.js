/// <reference types="cypress"/>

import { When, Then} from 'cypress-cucumber-preprocessor/steps';
import { Reset } from '../../pageobjects/reset_password';
const reset_password = new Reset();

var expected_error_message;

When('user clicks on send email button', () => {
    reset_password.click_send_email();
})

When('user enter invalid format of email address', (datatable) => {
    datatable.hashes().forEach( element => {
        reset_password.enter_E_mail(element.invalid_email_address);
    })
})

When('user enter valid format of email address', (datatable) => {
    datatable.hashes().forEach( element => {
        reset_password.enter_E_mail(element.valid_email_address);
    })
})

When('user clicks on the Back to Login link', () => {
    reset_password.click_back_to_login();
})

Then('system should display the error message', (datatable) => {
    datatable.hashes().forEach(element => {
        expected_error_message = element.message;
        reset_password.elements.E_mail_error_message().then((value) => {
            var actual_error_message = value.text();
            expect(expected_error_message).to.equal(actual_error_message);
        })
    });
})

Then('system should navigate to login page', () => {
    cy.url().should('eq','https://d1g5e94sevp1ds.cloudfront.net/login');
})

Then('system should display the error message below E-mail field', (datatable) => {
    datatable.hashes().forEach(element => {
        expected_error_message = element.message;
        reset_password.elements.E_mail_error_message().then((value) => {
            var e_mail_error_message = value.text();
            expect(expected_error_message).to.equal(e_mail_error_message);
        })
    })  
})

Then('system should display error message in popup', (datatable) => {
    datatable.hashes().forEach(element => {
        expected_error_message = element.message;
        reset_password.elements.popup_message().then((value) => {
            var popoup_error_message = value.text();
            expect(expected_error_message).to.equal(popoup_error_message);
        })
    })  
})