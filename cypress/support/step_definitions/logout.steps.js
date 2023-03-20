import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/login-page";
import LogoutPage from "../../pages/logout-page";

const loginPage = new LoginPage()
const logoutPage = new LogoutPage()

Given("que eu esteja logado na aplicação", () => {
    loginPage.acessar()
    loginPage.fazerLogin()
})

When("eu clico no botão de menu e aciono a opção logout", () => {
    logoutPage.fazerLogout()
})

Then("eu visualizo a página de login da aplicação", () => {
    logoutPage.validarLogoutComSucesso()
})

Given("que eu esteja na página de logout", () => {
    loginPage.acessar()
    loginPage.fazerLogin()
    logoutPage.fazerLogout()
})

When("eu acesso a página de produtos", () => {
    logoutPage.acessarPaginaDeProdutosAposLogout()
})