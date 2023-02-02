/// <reference types="cypress" />

describe('Login', () => {
  it('Deve exibir mensagem ao logar sem informar usuário', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="password"]').type('qwe')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').contains('Username is required')
  })

  it('Deve exibir mensagem ao logar sem informar senha', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('qwe')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').contains('Password is required')
  })

  it('Deve exibir mensagem ao logar sem informar usuário nem senha', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').contains('Username is required')
  })

  it('Deve exibir mensagem ao logar informando usuário ou senha inválidos', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('abc123')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').contains('Username and password do not match any user in this service')
  })

  it('Deve exibir mensagem ao logar com usuário bloqueado', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').contains('Sorry, this user has been locked out.')
  })

  it('Deve exibir mensagem ao acessar página de produtos sem estar autenticado', () => {
    cy.visit('https://www.saucedemo.com/inventory-item.html')
    //cy.request('inventory.html', 'failOnStatusCode: false cypress')
    cy.get('[data-test="error"]').contains('You can only access' + '/inventory.html' + 'when you are logged in.')
  })    
  
  it('Deve logar com sucesso', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('span.title').contains('Products')
    })
})