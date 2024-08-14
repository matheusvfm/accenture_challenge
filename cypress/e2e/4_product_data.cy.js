describe('Product data', () => {
    it('General testing about the third step to get a quote', () => {
      cy.visit('/app.php')
      cy.get('[id="enterproductdata"]').contains(/Enter Product Data/i)
      cy.get('[id="enterproductdata"]').should('contain.text', 'Enter Product Data')
      cy.get('[id="enterproductdata"]').should('be.visible')
      cy.get('[id="enterproductdata"]').should('not.be.disabled')
      cy.get('[id="enterproductdata"]').click()
    })
})