import { LoginPage } from "./portPageObject/PortnovLogInPO"
const loginPage = new LoginPage  //var / let что бы постоянная изменялась но с const она будет постоянной  // loginPage - прописывет название действия для дальнейших

it('PortnovLogIn', ()=>{
    //cy.visit('http://ask-int.portnov.com/#/login') // что бы было красивее добавил enterPage в page object
    loginPage.enterPage()
    loginPage.enterUsername('teacherBP1@gmail.com')
    loginPage.enterPassword('12345')
    loginPage.clickLogin()
})