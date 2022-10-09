export class Login {

    elements={
        E_mail: () => cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'),
        password: () => cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'),
        forgot_your_password: () => cy.get('.MuiTypography-root > .MuiButtonBase-root'),
        E_mail_mandatory_error_message: () => cy.get('form > :nth-child(1) > .MuiTypography-root'),
        password_mandatory_error_message: () => cy.get('form > :nth-child(2) > .MuiTypography-root'),
        popup_message: () => cy.get('.jss2')
    }

    enter_E_mail(email_address) {
        this.elements.E_mail().type(email_address);
    }

    enter_password(password){
        this.elements.password().type(password);
    }

    click_forgot_your_password(){
        this.elements.forgot_your_password().click();
    }
}