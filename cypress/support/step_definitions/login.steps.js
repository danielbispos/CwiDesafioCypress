import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/login-page";

const loginPage = new LoginPage()

Given("que eu acesse a página de login", () => {
    loginPage.acessar()
})

When("eu informo usuario e senha e aciono o botão de login", () => {
    loginPage.fazerLogin()
})

Then("eu visualizo página de produtos", () => {
    loginPage.validaLoginComSucesso()
})

When("eu não informo o usuario e aciono o botão de login", () => {
    loginPage.fazerLoginSemUsuario()
})

Then("eu obtenho a mensagem de erro de usuario", () => {
    loginPage.validaLoginSemUsuario()
})

When("eu não informo a senha e aciono o botão de login", () => {
    loginPage.fazerLoginSemSenha()
})

Then("eu obtenho a mensagem de erro de senha", () => {
    loginPage.validaLoginSemSenha()
})

When("eu não informo o usuário nem a senha e aciono o botão de login", () => {
    loginPage.fazerLoginSemUsuarioNemSenha()
})

Then("eu obtenho a mensagem de erro de usuário", () => {
    loginPage.validaLoginSemUsuario()
})

When("eu informo o usuário e/ou a senha inválidos e aciono o botão de login", () => {
    loginPage.fazerLoginComUsuarioSenhaInvalidos()
})

Then("eu obtenho a mensagem de erro de usuário inválido", () => {
    loginPage.validaLoginComUsuarioSenhaInvalidos()
})