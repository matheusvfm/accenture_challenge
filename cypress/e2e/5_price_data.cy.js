describe('Price data', () => {
    it('General testing about the fourth step to get a quote', () => {
      cy.visit('/app.php')
      cy.get('[id="selectpriceoption"]').contains(/Select Price Option/i)
      cy.get('[id="selectpriceoption"]').should('contain.text', 'Select Price Option')
      cy.get('[id="selectpriceoption"]').should('be.visible')
      cy.get('[id="selectpriceoption"]').should('not.be.disabled')
      cy.get('[id="selectpriceoption"]').click()
    })
})
  