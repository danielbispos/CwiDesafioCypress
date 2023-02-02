/// <reference types="cypress" />

describe('Logout', () => {
    it('Deve exibir a página de login ao selecionar a opção de logout', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
        cy.get('[data-test="login-button"]').contains('Login')
    })

    it('Deve exibir a página de login ao selecionar a opção de logout', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
        cy.visit('https://www.saucedemo.com/inventory-item.html')
        cy.get('[data-test="error"]').contains('You can only access' + '/inventory.html' + 'when you are logged in.')
    })
})