// -- Start: Our Cypress Tests --
describe('Prime & Median Test Suite', function() {
    context('Median of primes', function() {
        //Open the app before running each 'it' test
        beforeEach(() => {
            //URL can also be added to cypress.json for centralized access
            cy.visit('http://localhost:3000')
              .contains('Submit')
            //Ensures button is present on screen before proceeding
        })

    it('Display median until first 10 prime numbers', function() {
        //Ensures correct median is displayed for first 10 prime numbers
        cy.get('input')
          .clear().type('10').wait(500)
          .get('button').contains('Submit').click()
        cy.contains('[3,5]').wait(1000)
    })

    it('Display median until first 18 prime numbers', function() {
        //Ensures correct median is displayed for first 18 prime numbers
        cy.get('input')
          .clear().type('18').wait(500)
          .get('button').contains('Submit').click()
        cy.contains('[7]').wait(1000)
    })

    it('Display median until first 10000000 prime numbers', function() {
        //Ensures correct median is displayed for first 10000000 prime numbers
        cy.get('input')
          .clear().type('10000000').wait(500)
          .get('button').contains('Submit').click()
        cy.contains('[4751053]').wait(1000)
    })

    it('Validates alert text when out of bounds value is entered', function() {
        //Validate the Alert text in the log window of Cypress for out of bounds value
        cy.get('input')
          .clear().type('10000001').wait(500)
          .get('button').contains('Submit').click()
        //Create stub event to validate the alert text
        const stub = cy.stub()
        cy.on('window:alert', stub)
          .then(() => {
            //This test fails if below mentioned text does not match entirely
            expect(stub.getCall(0)).to.be.calledWith('Number exceeds limit')
        })
    })

    //Trying to validate the API Status Code in the response
    /**it('Validates error response code for value exceeding the limit', function() {
        //Check response code and display message for that code
        cy.server()
        cy.get('input')
          .clear().type('10000001')
          .get('button').contains('Submit').click()
        cy.route('GET', '**api/**').as('getMedian')
        cy.wait('@getMedian', {timeout: 10000}).then(function(xhr){    //Code fails here
            var response = xhr.response.body;
            if (response.contains('status', 500))
                console.log("Number exceeds limit")
        })
      }) **/

    })
})