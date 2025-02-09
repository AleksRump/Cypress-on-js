/// <reference types="cypress" />
before(function(){
    cy.fixture('example.json').as('test_data')
})

it('Read files using Fixture', function(){
    cy.fixture('example.json').then((data)=>{
        cy.log (data.name)
        cy.log(data.email) 
    })

    cy.log(this.test_data.name)
}) 

it('Read files using readFiles()', function(){
    cy.readFile('./cypress/fixtures/example.json').then ((data) =>{
        cy.log(data.name)
    })
})

it('Write file demo', function(){
    cy.writeFile('sample.txt', 'Hi Im Rumpel\n')
    cy.writeFile('sample.txt', 'Im learning Cypress', {flag:'a+'})
})