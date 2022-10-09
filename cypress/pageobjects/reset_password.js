export class Reset {

    elements={
        send_email: () => cy.get('.MuiBox-root > .MuiButtonBase-root > .MuiButton-label'),
        E_mail: () => cy.get('.MuiInputBase-input'),
        back_to_login: () => cy.get('.MuiTypography-root > .MuiButtonBase-root > .MuiButton-label'),
        E_mail_error_message: () => cy.get('.jss28 > .MuiTypography-root'),
        popup_message: () => cy.get('.MuiSnackbarContent-message')
    }

    click_send_email() {
        this.elements.send_email().click();
    }

    enter_E_mail(email_address){
        this.elements.E_mail().type(email_address);
    }

    click_back_to_login(){
        this.elements.back_to_login().click();
    }
}