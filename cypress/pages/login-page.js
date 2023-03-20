class LoginPage {
    url = 'https://www.saucedemo.com/'
    user = '[data-test="username"]'
    pass = '[data-test="password"]'
    loginButton = '[data-test="login-button"]'
    validLogin = '[data-test="error"]'

    acessar() {
        cy.visit('/')
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

    fazerLoginComUsuarioBloqueado() {
        cy.get(this.user).type('locked_out_user')
        cy.get(this.pass).type('secret_sauce')
        cy.get(this.loginButton).click()
    }

    fazerLoginSemUsuarioAutenticado() {
        cy.visit('inventory.html')
        //cy.request({url: 'inventory-item.html', failOnStatusCode: false})
    }
    
    validaLoginComSucesso() {
        cy.url().should('contains', '/inventory.html')
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

    validaLoginComUsuarioBloqueado() {
        cy.get(this.validLogin).contains('Sorry, this user has been locked out.')
    }

    validaLoginSemUsuarioAutenticado() {
        cy.get(this.validLogin).contains('You can only access')
    }
}

export default LoginPage