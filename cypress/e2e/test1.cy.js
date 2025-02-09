/// <reference types="cypress" />

//it('Google Search', function(){ }) можно и так и так
it('Google Search', ()=>{
    cy.visit('https://google.com')
    cy.get('#APjFqb'). type('cucamber{Enter}') // 'cucamber{Enter}' этот enter позволяет просто нажать enter, без доаолнительной строки
    //cy.contains('Buscar con Google'). click()
    cy.get('#dimg_11'). click()  //кликеуть по картинке
    cy.wait(2000)
    cy.get('[style="background-color: rgb(32, 33, 36); transform: scale(1.1, 0.9); font-family: monospace; font-size: 26px; width: 52px; height: 52px; color: rgb(232, 234, 237); display: flex; justify-content: center; align-items: center; position: fixed; top: 0px; right: 8px; z-index: 1121;"]', {timeout:5000}). click()
    //это нажмёт крестик и таймаут увеличен

})