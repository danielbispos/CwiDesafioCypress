/// <reference types="cypress" />

import LoginPage from "../pages/login-page"

const loginPage = new LoginPage()

Cypress.Commands.add('fazerLogin', () => {
    loginPage.fazerLogin()
})
