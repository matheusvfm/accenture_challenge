describe('Send quote', () => {
    it('General testing about the fifth step to get a quote', () => {
      cy.visit('/app.php')
      cy.get('[id="sendquote"]').contains(/Send Quote/i)
      cy.get('[id="sendquote"]').should('contain.text', 'Send Quote')
      cy.get('[id="sendquote"]').should('be.visible')
      cy.get('[id="sendquote"]').should('not.be.disabled')
      cy.get('[id="sendquote"]').click()
    })
    it('Filling all fields to get a quote', () => {
      //vehicle data + next step
      cy.visit('/app.php')
      cy.get('#make').select("Skoda")
      cy.get('#model').select("Moped")
      cy.get('#cylindercapacity').type("1000")
      cy.get('#engineperformance').type("1000")
      cy.get('#opendateofmanufacturecalender').click()
      cy.get('a.ui-datepicker-prev[data-handler="prev"][data-event="click"]').click()
      cy.get('a.ui-state-default').contains('1').click()
      cy.get('#numberofseats').select("4")
      cy.get('input[name="Right Hand Drive"][value="Yes"]').click({force: true})//non mandatory
      cy.get('#fuel').select("Diesel")
      cy.get('#payload').type("500")

    })

    it('Filling all manndatory fields to get a quote', () => {
      //vehicle data + next step
      cy.visit('/app.php')
      cy.get('#make').select("Skoda")
      cy.get('#model').select("Moped")
      cy.get('#cylindercapacity').type("1000")
      cy.get('#engineperformance').type("1000")
      cy.get('#opendateofmanufacturecalender').click()
      cy.get('a.ui-datepicker-prev[data-handler="prev"][data-event="click"]').click()
      cy.get('a.ui-state-default').contains('1').click()
      cy.get('#numberofseats').select("4")
      cy.get('#fuel').select("Diesel")
      cy.get('#payload').type("500")

    })

    //I should navigate trough each step after fill them, to check if I all changes are keeping saved
})