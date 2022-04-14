
beforeEach(function(){
    cy.visit(Cypress.env('baseUrl'));
})


    it('checkTabsSwitching', () => {
        cy.get('input[name="username"]').clear().type(Cypress.env('user'));
        cy.get('input[name="password"]').clear().type(Cypress.env('pass'), { log: false });
        cy.get('button[type="submit"]').click();
        cy.contains('Plans').click();
        cy.get('button[ng-click="addPlan()"]').should('be.visible');
        cy.contains('Keywords').click();
        cy.get('button[ng-click="addFunction()"]').should('be.visible');
        cy.contains('Parameters').click();
        cy.get('button[ng-click="addParameter()"]').should('be.visible');
        cy.contains('Executions').click();
        cy.contains(' Execution list ').should('be.visible');
        cy.contains('Scheduler').click();
        cy.get('button[ng-click="addSchedulerEntry()"]').should('be.visible');
        cy.contains('Grid').click();
        cy.get('[heading="Agents"]').should('be.visible');
        cy.contains('Admin').click();
        cy.get('button[ng-click="addUser()"]').should('be.visible');
    });

