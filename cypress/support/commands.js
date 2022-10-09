Cypress.Commands.add('login',()=>{
    cy.visit('/login');
})

Cypress.Commands.add('enterLogin',()=>{
    cy.get('form > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click();
})

Cypress.Commands.add('navigateToResetPasswordPage',()=>{
    cy.get('.MuiTypography-root > .MuiButtonBase-root > .MuiButton-label').click()
})