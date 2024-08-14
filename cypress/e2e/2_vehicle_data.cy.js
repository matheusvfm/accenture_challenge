describe.only('Vehicle data', () => {
  it('General testing about the first step to get a quote', () => {
    cy.visit('/app.php')
    cy.getDataTest('entervehicledata').contains(/Enter Vehicle Data/i)
    cy.getDataTest('entervehicledata').should('contain.text', 'Enter Vehicle Data')
    cy.getDataTest('entervehicledata').should('be.visible')
    cy.getDataTest('entervehicledata').should('not.be.disabled')
    cy.getDataTest('entervehicledata').click()
  })

  it('Validating dropdown elements', () => {
    cy.visit('/app.php')
    const expectedOptionsMake = [
      '– please select –',
      'Audi',
      'BMW',
      'Ford',
      'Honda',
      'Mazda',
      'Mercedes Benz',
      'Nissan',
      'Opel',
      'Porsche',
      'Renault',
      'Skoda',
      'Suzuki',
      'Toyota',
      'Volkswagen',
      'Volvo'
  ];

  cy.get('#make').find('option').each(($el, index, $list) => {
      const optionText = $el.text();
      expect(optionText).to.equal(expectedOptionsMake[index]);
  })
})
})

