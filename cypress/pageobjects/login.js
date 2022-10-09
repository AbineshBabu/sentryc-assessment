export class Login {

    elements={
        EMail: () => cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'),
        password: () => cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'),
        forgotYourPassword: () => cy.get('.MuiTypography-root > .MuiButtonBase-root'),
        EMailMandatoryErrorMessage: () => cy.get('form > :nth-child(1) > .MuiTypography-root'),
        passwordMandatoryErrorMessage: () => cy.get('form > :nth-child(2) > .MuiTypography-root'),
        popupMessage: () => cy.get('.jss2')
    }

    enterEMail(emailAddress) {
        this.elements.EMail().type(emailAddress);
    }

    enterPassword(password){
        this.elements.password().type(password);
    }

    clickForgotYourPassword(){
        this.elements.forgotYourPassword().click();
    }
}