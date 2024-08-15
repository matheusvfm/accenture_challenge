describe('Vehicle data', () => {
  beforeEach(() => {
    cy.visit('/app.php')
  })

  it('Nav bar: first step to get a quote', () => {
    //bad path
    cy.getDataTest('entervehicledata').contains(/Enter Vehicle Data/i)
    cy.get('label.main').contains('Make').should('be.visible')
    cy.get('label.main').contains('Model').should('be.visible')
    cy.get('label.main').contains('Cylinder Capacity [ccm]').should('be.visible')
    cy.get('label.main').contains('Engine Performance [kW]').should('be.visible')
    cy.get('label.main').contains('Date of Manufacture').should('be.visible')
    cy.get('label.main').contains('Number of Seats').should('be.visible')
    cy.get('label.main').contains('Right Hand Drive').should('be.visible')
    cy.get('label.main').contains('Number of Seats').should('be.visible')
    cy.get('label.main').contains('Fuel Type').should('be.visible')
    cy.get('label.main').contains('Payload [kg]').should('be.visible')
    cy.get('label.main').contains('Total Weight [kg]').should('be.visible')
    cy.get('label.main').contains('List Price [$]').should('be.visible')
    cy.get('label.main').contains('License Plate Number').should('be.visible')
    cy.get('label.main').contains('Annual Mileage [mi]').should('be.visible')
    cy.getDataTest('entervehicledata').should('contain.text', 'Enter Vehicle Data')
    cy.getDataTest('entervehicledata').should('be.visible')
    cy.getDataTest('entervehicledata').should('not.be.disabled')
    cy.getDataTest('entervehicledata').click()
  })

  it('Validating Make field', () => {
    const options = [
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
    ]
    cy.arrayValidator ('make', options)
    const randomOption = cy.getRandomElement(options)
    //good path
    cy.get('#make').select("Volvo")//I would like to use the random option here, but I couldn't figure it out
    cy.get('#make').should('have.value', "Volvo");
    cy.get('#make').should('have.css', 'background-color', 'rgb(240, 246, 253)')
    //bad path
    cy.get('#make').select("– please select –")
    cy.get('#make').should('have.css', 'background-color', 'rgb(254, 236, 235)')
    cy.get('span.error').contains('Select an option')
    //good path
    cy.get('#make').select("Skoda")
    cy.get('#make').should('have.value', "Skoda");
    cy.get('#make').should('have.css', 'background-color', 'rgb(240, 246, 253)')
    //Missing: validation of the check mark icon
  })
  
  it('Validating Model field', () => {
    const options = [
      '– please select –',
      'Scooter',
      'Three-Wheeler',
      'Moped',
      'Motorcycle'
    ]
    cy.arrayValidator ('model', options)
    //good path
    cy.get('#model').select("Scooter")
    cy.get('#model').should('have.value', "Scooter");
    cy.get('#model').should('have.css', 'background-color', 'rgb(240, 246, 253)')
    //bad path
    cy.get('#model').select("– please select –")
    cy.get('#model').should('have.css', 'background-color', 'rgb(254, 236, 235)')
    cy.get('span.error').contains('Select an option')
    //good path
    cy.get('#model').select("Moped")
    cy.get('#model').should('have.value', "Moped");
    cy.get('#model').should('have.css', 'background-color', 'rgb(240, 246, 253)')
    //Missing: validation of the check mark icon
  })

  it('Validating Cylinder Capacity field', () => {
    cy.get('span.error').contains('This field is mandatory').and('not.be.visible')
    cy.get('#cylindercapacity').click()
    cy.get('span.error').contains('This field is mandatory')
    //bad path
    cy.get('#cylindercapacity').type("Scooter")
    cy.get('#cylindercapacity').should('have.css', 'background-color', 'rgb(254, 236, 235)')
    cy.get('#cylindercapacity').clear()
    cy.get('#cylindercapacity').type("2001")
    cy.get('#cylindercapacity').should('have.css', 'background-color', 'rgb(254, 236, 235)')
    cy.get('span.error').contains('Must be a number between 1 and 2000').and('be.visible')
    cy.get('#cylindercapacity').clear()
    cy.get('#cylindercapacity').type("0")
    cy.get('#cylindercapacity').should('have.css', 'background-color', 'rgb(254, 236, 235)')
    cy.get('span.error').contains('Must be a number between 1 and 2000').and('be.visible')
    //good path
    cy.get('#cylindercapacity').clear()
    cy.get('#cylindercapacity').type("1000")
    cy.get('#cylindercapacity').should('have.css', 'background-color', 'rgb(240, 246, 253)')
    //Missing: validation of the check mark icon
  })

  it('Validating Engine Performance field', () => {
    cy.get('span.error').contains('This field is mandatory').and('not.be.visible')
    cy.get('#engineperformance').click()
    cy.get('span.error').contains('This field is mandatory')
    //bad path
    cy.get('#engineperformance').type("Scooter")
    cy.get('#engineperformance').should('have.css', 'background-color', 'rgb(254, 236, 235)')
    cy.get('span.error').contains('Must be a number between 1 and 2000').and('be.visible')
    cy.get('#engineperformance').clear()
    cy.get('#engineperformance').type("2001")
    cy.get('#engineperformance').should('have.css', 'background-color', 'rgb(254, 236, 235)')
    cy.get('span.error').contains('Must be a number between 1 and 2000').and('be.visible')
    cy.get('#engineperformance').clear()
    cy.get('#engineperformance').type("0")
    cy.get('#engineperformance').should('have.css', 'background-color', 'rgb(254, 236, 235)')
    cy.get('span.error').contains('Must be a number between 1 and 2000').and('be.visible')
    //good path
    cy.get('#engineperformance').clear()
    cy.get('#engineperformance').type("1000")
    cy.get('#engineperformance').should('have.css', 'background-color', 'rgb(240, 246, 253)')
    //Missing: validation of the check mark icon
  })

  it('Validanting Date of manufacture field', () => {
    cy.get('span.error').contains('This field is mandatory').and('not.be.visible')
    cy.get('#engineperformance').click()
    cy.get('span.error').contains('This field is mandatory')
    //bad path
    cy.get('#dateofmanufacture').type("03/08/2035")
    cy.get('#dateofmanufacture').should('have.css', 'background-color', 'rgb(254, 236, 235)')
    cy.get('#opendateofmanufacturecalender').click()
    cy.get('a.ui-datepicker-next[data-handler="next"][data-event="click"]').click()
    cy.get('a.ui-state-default').contains('1').click()
    cy.get('#dateofmanufacture').should('have.css', 'background-color', 'rgb(254, 236, 235)')
    cy.get('span.error').contains('Must be today or somewhere in the past').and('be.visible')
    //good path
    cy.get('#dateofmanufacture').clear()
    cy.get('input[placeholder="MM/DD/YYYY"]').should('be.visible')
    cy.get('#dateofmanufacture').type("10/10/2023")
    cy.get('#dateofmanufacture').should('have.css', 'background-color', 'rgb(240, 246, 253)')
    cy.get('#opendateofmanufacturecalender').click()
    cy.get('a.ui-datepicker-prev[data-handler="prev"][data-event="click"]').click()
    cy.get('a.ui-state-default').contains('1').click()
    cy.get('#dateofmanufacture').should('have.css', 'background-color', 'rgb(240, 246, 253)')
    //Missing: validation of the check mark icon
  })

  it('Validating Number of Seats field', () => {
    const options = [
      '– please select –',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9'
    ]
    cy.arrayValidator ('numberofseats', options)
    //good path
    cy.get('#numberofseats').select("9")
    cy.get('#numberofseats').should('have.value', "9");
    cy.get('#numberofseats').should('have.css', 'background-color', 'rgb(240, 246, 253)')
    //bad path
    cy.get('#numberofseats').select("– please select –")
    cy.get('#numberofseats').should('have.css', 'background-color', 'rgb(254, 236, 235)')
    cy.get('span.error').contains('Select an option')
    //good path
    cy.get('#numberofseats').select("1")
    cy.get('#numberofseats').should('have.value', "1");
    cy.get('#numberofseats').should('have.css', 'background-color', 'rgb(240, 246, 253)')
    //Missing: validation of the check mark icon
  })

  it('Validating Right Hand Drive field', () => {
    cy.get('input[name="Right Hand Drive"][value="Yes"]').click({force: true})
    cy.get('input[name="Right Hand Drive"][value="No"]').click({force: true})
    cy.get('input[name="Right Hand Drive"][value="Yes"]').click({force: true})
  })

  it('Validating Fuel Type field', () => {
    const options = [
      '– please select –',
      'Petrol',
      'Diesel',
      'Electric Power',
      'Gas',
      'Other'
    ]
    cy.arrayValidator ('fuel', options)
    //good path
    cy.get('#fuel').select("Petrol")
    cy.get('#fuel').should('have.value', "Petrol");
    cy.get('#fuel').should('have.css', 'background-color', 'rgb(240, 246, 253)')
    //bad path
    cy.get('#fuel').select("– please select –")
    cy.get('#fuel').should('have.css', 'background-color', 'rgb(254, 236, 235)')
    cy.get('span.error').contains('Select an option')
    //good path
    cy.get('#fuel').select("Gas")
    cy.get('#fuel').should('have.value', "Gas");
    cy.get('#fuel').should('have.css', 'background-color', 'rgb(240, 246, 253)')
    //Missing: validation of the check mark icon
  })
  it.only('Validating Payload field', () => {
    cy.get('span.error').contains('This field is mandatory').and('not.be.visible')
    cy.get('#payload').click()
    cy.get('span.error').contains('This field is mandatory')
    //bad path
    cy.get('#payload').type("Scooter")
    cy.get('#payload').should('have.css', 'background-color', 'rgb(254, 236, 235)')
    cy.get('#payload').clear()
    cy.get('#payload').type("1001")
    cy.get('#payload').should('have.css', 'background-color', 'rgb(254, 236, 235)')
    cy.get('span.error').contains('Must be a number between 1 and 1000').and('be.visible')
    cy.get('#payload').clear()
    cy.get('#payload').type("0")
    cy.get('#payload').should('have.css', 'background-color', 'rgb(254, 236, 235)')
    cy.get('span.error').contains('Must be a number between 1 and 1000').and('be.visible')
    //good path
    cy.get('#payload').clear()
    cy.get('#payload').type("500")
    cy.get('#payload').should('have.css', 'background-color', 'rgb(240, 246, 253)')
    //Missing: validation of the check mark icon
  })
})
