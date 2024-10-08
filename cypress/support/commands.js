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

Cypress.Commands.add('getDataTest', (dataTestSelector) => {
    return cy.get(`[id="${dataTestSelector}"]`)
})

Cypress.Commands.add('getRandomElement', (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
})

Cypress.Commands.add('arrayValidator', (dataTest, options) => {
    return cy.get(`[id="${dataTest}"]`).find('option').each(($el, index) => {
        const optionText = $el.text()
        expect(optionText).to.equal(options[index])
    })
})