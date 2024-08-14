describe('Top header', () => {
    beforeEach(() => {
      cy.visit('/app.php')
    })
    it('Contains correct header text', () => {
      cy.getDataTest('app_sub_title').contains(/Vehicle Insurance Application/i)
      cy.getDataTest('app_sub_title').should('contain.text', 'Vehicle Insurance Application')
    })
    it('Contains correct logo', () => {
      cy.getDataTest('tricentis_logo').should('have.attr', 'src').should('include','logo.png')//is not verifying if the image is the correct one, this is mostly verifying the filename
    })
})
  