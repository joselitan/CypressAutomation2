

describe('My Second Test Suite', function () {
    it('My firstTest case', function () {
        //Check boxes
        cy.visit(Cypress.env('url') + "AutomationPractice")
        cy.get("#alertbtn").click()
        cy.get("[value='Confirm']").click()
        //window:alert
        //cy.on('window:alert', (text) => {
        //    expect(text).to.contains('Hello , share this practice page and share your knowledge');
        cy.on('window:alert', (str) => {
            //mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        });
        cy.on('window:confirm', (str) => {
            //mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        });
    })
})