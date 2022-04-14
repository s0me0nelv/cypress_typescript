
beforeEach(function(){
    cy.visit(Cypress.env('baseUrl'));
})


describe('Login test', () => {

    it('checkSuccessfulLogin', () => {
        cy.get('input[name="username"]').clear().type(Cypress.env('user'));
        cy.get('input[name="password"]').clear().type(Cypress.env('pass'), { log: false });
        cy.get('button[type="submit"]').click();
        cy.get('#sessionDropdown').should('have.text', ' admin [admin]');
        cy.get('#sessionDropdown').click().get('a[ng-click="authService.logout()"]').click();
    })

    it('checkWrongPassword', () => {
        cy.get('input[name="username"]').clear().type(Cypress.env('user'));
        cy.get('input[name="password"]').clear().type(Cypress.env('wrongPass'), { log: false });
        cy.get('button[type="submit"]').click();
        cy.get('.alert').should('have.text', 'Authentication failed: Invalid username/password')
        })
});