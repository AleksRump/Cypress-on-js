export class LoginPage{
    // Tак можно объеденить все действия для входа в одном и жёстко закодированые данные для 2 теста
     login(){               //  не могу использовать неверные данные для входа
        cy.visit('http://ask-int.portnov.com/#/login')
        cy.get('#mat-input-0'). type('teacherBP1@gmail.com')
        cy.get('#mat-input-1'). type('12345')
        cy.get('.mat-raised-button > .mat-button-wrapper'). click()
     }

    // Tак делать для разъединения каждого дейстивия и это жёстко закодировано для тестирования и когда нужн6о будет протестировать
   
    //  enterUsername(){              //с неверными ланными то я не смогу  для 1 теста
    //      cy.get('#mat-input-0'). type('teacherBP1@gmail.com')
    //  }

    //  enterPassword(){
    //      cy.get('#mat-input-1'). type('12345')
    //  }

    //  clickLogin(){
    //      cy.get('.mat-raised-button > .mat-button-wrapper'). click()
    //  }

    // Tак разъединено но логин и пароль не жостко закодированы и я могу тестить с лююыми данными верные или не верные
    
    // enterPage(){
    //     cy.visit('http://ask-int.portnov.com/#/login')
    // }

    // enterUsername(username){
    //     cy.get('#mat-input-0'). type(username)
    // }

    // enterPassword(password){
    //     cy.get('#mat-input-1'). type(password)
    // }

    // clickLogin(){
    //     cy.get('.mat-raised-button > .mat-button-wrapper'). click()
    // }

    /*Tак разъединено но логин и пароль не жостко закодированы и них так же все объекты хранятся отдельнO для 1 тестA*/
   
    url = 'http://ask-int.portnov.com/#/login'      // так хранить каждый объект отдельно
    email_textbox = '#mat-input-0'                  // переменные для локаторов объектов, надо поменять и поменял здесь и готово
    password_textbox = '#mat-input-1' 
    login_button = '.mat-raised-button > .mat-button-wrapper'
    Logout_button = 'mat-list-item.mat-list-item > .mat-list-item-content > .mat-list-text > .mat-line'
    accept_logout_modalwindow_button = '.mat-dialog-actions > .mat-warn'

    enterPage(){
        cy.visit(this.url)
    }

    enterUsername(email){
        cy.get(this.email_textbox). type(email)
    }

    enterPassword(password){
        cy.get(this.password_textbox). type(password)
    }

    clickLogin(){
        cy.get(this.login_button). click()
    }

    LogOut(){
        cy.get(this.Logout_button).click()
        cy.wait(1500)
        cy.get(this.accept_logout_modalwindow_button).click()

    }
}
