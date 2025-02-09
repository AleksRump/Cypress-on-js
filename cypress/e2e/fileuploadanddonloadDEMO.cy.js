/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

it('File upload test', function(){
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('20210603_124907.jpg')                          // attachFile для выгрузки файла
})

it('File download test', function(){
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')    //downloadFile для загрузки файла
})