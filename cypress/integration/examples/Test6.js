describe('My Second Test Suite', function () {
    it('My firstTest case', function () {
        //Check boxes
        cy.visit(Cypress.env('url') + "AutomationPractice")

        cy.get("div.mouse-hover-content").invoke("show")
        cy.contains('Top').click()
        cy.url().should('include', '#top')


    })
})