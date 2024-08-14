describe('Insurant data', () => {
    it('General testing about the second step to get a quote', () => {
      cy.visit('/app.php')
      cy.get('[id="enterinsurantdata"]').contains(/Enter Insurant Data/i)
      cy.get('[id="enterinsurantdata"]').should('contain.text', 'Enter Insurant Data')
      cy.get('[id="enterinsurantdata"]').should('be.visible')
      cy.get('[id="enterinsurantdata"]').should('not.be.disabled')
      cy.get('[id="enterinsurantdata"]').click()
    })
})