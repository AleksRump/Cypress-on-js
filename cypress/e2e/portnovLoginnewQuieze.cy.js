import { Quieez } from "./portPageObject/portnovcNewQueezObject"
import { LoginPage } from "./portPageObject/PortnovLogInPO"

const loginPage = new LoginPage
const quieeze = new Quieez

describe('Login- create quieze- delet quieze-Logout', function () {
    // it('login', () => {
    //     loginPage.enterPage()
    //     loginPage.enterUsername('teacherBP1@gmail.com')
    //     loginPage.enterPassword('12345')
    //     loginPage.clickLogin()
    //     quieeze.quieezPage()
    //     quieeze.createQuieeze()
    //     quieeze.EnternameQuieeeze('AAAAA')
    //     quieeze.addQuiestion()
    //     quieeze.quiestionType()
    //     quieeze.enterFirstQuiestion('1 Quiestion')
    //     quieeze.saveQuieeze()
    //     cy.wait(1500)
    //     quieeze.deleteQuieeze()
    //     loginPage.LogOut()
    // })
    describe('Login - Create Quieze - Delete Quieze - Logout', function () {

        beforeEach(() => {   //перед каждым it запустит вход на страницу
            loginPage.enterPage()
            loginPage.enterUsername('teacherBP1@gmail.com')
            loginPage.enterPassword('12345') 
            loginPage.clickLogin()
        })

        afterEach(() => {   //после каждого it запустит вход на страницу
            loginPage.LogOut()
        })
        
        it('create/delete quieze', () => {
            quieeze.quieezPage()
            quieeze.createQuieeze()
            quieeze.EnternameQuieeeze('AAAAA')
            quieeze.addQuiestion()
            quieeze.quiestionType()
            quieeze.enterFirstQuiestion('1 Quiestion')
            quieeze.saveQuieeze()
            quieeze.deleteQuieeze()
        })

      })
})