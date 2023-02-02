class LoginPage {
    url = 'https://www.saucedemo.com/'
    user = '[data-test="username"]'
    pass = '[data-test="password"]'
    loginButton = '[data-test="login-button"]'
    validLogin = '[data-test="error"]'

    acessar() {
        cy.visit(this.url)
        cy.get(this.user).should('be.visible')
    }

    fazerLogin() {    
        cy.get(this.user).type('standard_user')
        cy.get(this.pass).type('secret_sauce')
        cy.get(this.loginButton).click()
    }

    fazerLoginSemUsuario() {
        cy.get(this.pass).type('secret_sauce')
        cy.get(this.loginButton).click()
    }

    fazerLoginSemSenha() {
        cy.get(this.user).type('standard_user')
        cy.get(this.loginButton).click()
    }

    fazerLoginSemUsuarioNemSenha() {
        cy.get(this.loginButton).click()
    }

    fazerLoginComUsuarioSenhaInvalidos() {
        cy.get(this.user).type('standard_user')
        cy.get(this.pass).type('abc123')
        cy.get(this.loginButton).click()
    }
    
    validaLoginComSucesso() {
        cy.get('span.title').contains('Products')
    }

    validaLoginSemUsuario() {
        cy.get(this.validLogin).contains('Username is required')
    }

    validaLoginSemSenha() {
        cy.get(this.validLogin).contains('Password is required')
    }

    validaLoginComUsuarioSenhaInvalidos() {
        cy.get(this.validLogin).contains('Username and password do not match any user in this service')
    }    
}

export default LoginPage