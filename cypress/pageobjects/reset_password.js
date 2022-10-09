export class Reset {

    elements={
        sendEmail: () => cy.get('.MuiBox-root > .MuiButtonBase-root > .MuiButton-label'),
        EMail: () => cy.get('.MuiInputBase-input'),
        backToLogin: () => cy.get('.MuiTypography-root > .MuiButtonBase-root > .MuiButton-label'),
        EMailErrorMessage: () => cy.get('.jss28 > .MuiTypography-root'),
        popupMessage: () => cy.get('.MuiSnackbarContent-message')
    }

    clickSendEmail() {
        this.elements.sendEmail().click();
    }

    enterEMail(emailAddress){
        this.elements.EMail().type(emailAddress);
    }

    clickBackToLogin(){
        this.elements.backToLogin().click();
    }
}