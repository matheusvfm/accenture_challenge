describe('Send quote', () => {
    it('General testing about the fifth step to get a quote', () => {
      cy.visit('/app.php')
      cy.get('[id="sendquote"]').contains(/Send Quote/i)
      cy.get('[id="sendquote"]').should('contain.text', 'Send Quote')
      cy.get('[id="sendquote"]').should('be.visible')
      cy.get('[id="sendquote"]').should('not.be.disabled')
      cy.get('[id="sendquote"]').click()
    })
})