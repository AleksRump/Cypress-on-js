
// it('Assertions Demo name', () => {
//     cy.visit('https://example.cypress.io')
//     cy.contains('Querying'). click()               //  так не сработало не нажал на эту ссылку 


it('Assertions Demo name', () => {               // так сработал, объект не втден в css  display: none 
  cy.visit('https://example.cypress.io')          // но при принудительном нажатие всё сработало { force: true }
  cy.contains('Querying').click({ force: true })
  cy.get('#query-btn')
      .should('contain', 'Button')             //  подтверждает что элемент '#query-btn' сожержит текст 'Button'
      .and('have.class', 'query-btn')       //  подтверждает что элемент '#query-btn' сожержит только текст 'Button'
      .and('be.visible')                    //  подтверждает что элемент '#query-btn'видимый
      .and('be.enabled')                    //  что он вкл. но если выбрать disabled то будет ошибка  
                              //.should('be.focus')         он сказал то же что и иметь хз оба варианта выдали ошибки  
  expect(true).to.be.true
  assert.equal(4,4, 'NOT EQUAL')     // не понял чё чему равер но есло 4 выбрать как текст '4' то тест пройдёт а 5 нет и 3 иак же
}); 
