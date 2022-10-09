Cypress.Commands.add('login',()=>{
    cy.visit('/login');
})

Cypress.Commands.add('enter_login',()=>{
    cy.get('form > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click();
})

Cypress.Commands.add('navigate_to_resetPassword_page',()=>{
    cy.get('.MuiTypography-root > .MuiButtonBase-root > .MuiButton-label').click()
})