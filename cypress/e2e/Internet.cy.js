it('Internet check elements', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Available Examples')   // Проверка заголовка страницы

    // Проверяем, что ссылка видима, доступна и корректна A/B Test
    cy.get(':nth-child(1) > a')
        .should('be.visible')        // Видимый
        .should('exist')             // Присутствует в DOM
        .should('not.be.disabled')   // Не отключен
        .should('have.attr', 'href', '/abtest') // Проверка ссылки
        .click()


    cy.url().should('include', '/abtest')    // Проверяем, что URL изменился после клика
    cy.contains('A/B Test')                  // Проверяем, что заголовок новой страницы правильный
    cy.go('back')                            // Возвращаемся назад   
    cy.url().should('eq', 'https://the-internet.herokuapp.com/')    // Проверяем, что снова на главной странице  
    cy.get(':nth-child(1) > a').should('be.visible')                // Проверяем, что кнопка снова видима и доступна


    // Проверяем, что ссылка видима, доступна и корректна Checkboxes
    cy.get(':nth-child(6) > a')
        .should('be.visible')        // Видимый
        .should('exist')             // Присутствует в DOM
        .should('not.be.disabled')   // Не отключен
        .should('have.attr', 'href', '/checkboxes') // Проверка ссылки
        .click()

    cy.get('#checkboxes > :nth-child(1)')
        .check()   // установить чекбокс
        .uncheck() // снять отметку с чекбокса

    cy.get('#checkboxes > :nth-child(3)')
        .uncheck() // снять отметку с чекбокса
        .check()   // установить чекбокс
    cy.go('back')

    // Проверяем, что ссылка видима, доступна и корректна Basic Auth
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    cy.contains('Congratulations! You must have the proper credentials.')

    
cy.visit('https://the-internet.herokuapp.com/')  // Возвращаемся на главную страницу
cy.contains('Available Examples')               // Проверяем, что главная страница загружена
    
    // Проверяем, что ссылка видима, доступна и корректна Digest Authentication  не может протестирова
    //т к cypress  не может с окнами аутентификации браузера 
    // (Browser Authentication Dialogs) или native authentication popups потому что они не являются частью DOM.

    // Проверяем, что ссылка видима, доступна и корректна Form Authentication
    cy.get(':nth-child(21) > a').click()
    cy.contains('Login Page')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.contains('You logged into a secure area!')

    cy.visit('https://the-internet.herokuapp.com')  // Возвращаемся на главную страницу
    cy.contains('Available Examples')               // Проверяем, что главная страница загружена 

    // Проверяем, что ссылка видима, доступна и корректна 

})