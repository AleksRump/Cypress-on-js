import { LoginPage } from "./portPageObject/PortnovLogInPO"  // этот для проведения нескольких тестов с верными и неверными 

const Login = new LoginPage  // Login - это действие ниже    // данными для входа, по этому лучше использовать нижний вариант
                                                             //  в нем можно менять ланные для входа
// beforeEach(function(){         //что бы перед каждым тестом заходил на страниуцу web, что бы не писать visit каждый раз 
    //     cy.visit('http://ask-int.portnov.com/#/login')   // так повторит вход на сайт на всех блоках вне describe
    //  })                                              !!!!!!!!нужная штука!!!!!!!!

describe('All login tests', function (){   // создаст группу в которй все тесты(похоже это для того что бы показывало название
                                           // All login tests и внутри будут все тесты) это в браезере где показывает результат
    // beforeEach(function(){         //что бы перед каждым тестом заходил на страниуцу web, что бы не писать visit каждый раз 
    //     cy.visit('http://ask-int.portnov.com/#/login')  // так повторит вход на сайт на все тесты внутри describe
    //  })                                              !!!!!!!!нужная штука!!!!!!!!
    
    it('PortnovLogin2', ()=>{
        Login.login()  // login для связи с page object и выполнения действий в нём
        cy.contains('Quizzes').click()
    })
    
    const loginPage = new LoginPage  // эта часть обязательна без нее тест не сработает (этот вариант лучше измени на неверный вход)
    it('PortnovLogIn valid data', ()=>{
        loginPage.enterPage()
        loginPage.enterUsername('teacherBP1@gmail.com')
        loginPage.enterPassword('12345')
        loginPage.clickLogin()
        cy.contains('Quizzes').click()  // с неверным паролем не нажмёт и выдаст ошибку
    })

    //const loginPage = new LoginPage  // второй раз не нужна эта строка или будет ошибка в коде
    it.skip('PortnovLogIn invalid data', ()=>{      // it.skip- пропустит тест/ it.only - запустит только один тест, другие не покажет
        loginPage.enterPage()
        loginPage.enterUsername('teacherBP1@gmail.com')
        loginPage.enterPassword('123451')
        loginPage.clickLogin()
        cy.contains('Quizzes').click()  // с неверным паролем не нажмёт и выдаст ошибку
    })
   
    it('PortnovLogIn invalid data', ()=>{      // it.skip- пропустит тест/ it.only - запустит только один тест, другие не покажет
        loginPage.enterPage()
        loginPage.enterUsername('teacherBP1@gmail.com')
        loginPage.enterPassword('123451')
        loginPage.clickLogin()
        
    })
    
})

