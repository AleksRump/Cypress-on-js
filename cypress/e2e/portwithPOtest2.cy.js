import { LoginPage } from "./portPageObject/PortnovLogInPO"  // этот вариант не может использовать не верные данные для входа
const Login = new LoginPage  // Login - это действие ниже

it('PortnovLogin2', ()=>{
    Login.login()  // login для связи с page object и выполнения действий в нём
})