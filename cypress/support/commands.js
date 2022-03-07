// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
   Cypress.Commands.add("selectProduct", (productName) => {
       cy.get('#tbodyid').find('.col-lg-4.col-md-6.mb-4').each(($elements, index) => {
           const products = $elements.find('.card-title').text()
           if(products.includes(productName)){
               cy.wrap($elements).find('.hrefch').click()
               cy.wait(2000)
           }
       })
   })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
