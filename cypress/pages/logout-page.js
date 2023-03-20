class LogoutPage{
    user = '[data-test="username"]'

    fazerLogout() {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    }

    validarLogoutComSucesso(){
        cy.get(this.user).should('be.visible')
        //cy.get('[data-test="login-button"]').contains('Login')
    }

    acessarPaginaDeProdutosAposLogout(){
        cy.visit('inventory.html')
        //cy.url().type('inventory.html{enter}')
        //cy.url().should('include', 'inventory.html').click()
    }

}

export default LogoutPage