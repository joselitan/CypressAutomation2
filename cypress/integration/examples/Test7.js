
describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
        cy.visit(Cypress.env('url') + 'AutomationPractice/')
        //open tab without opening page in new browser tab
        cy.get("#opentab").invoke('removeAttr', 'target').click();

        cy.origin("https://www.qaclickacademy.com/", () => {
            cy.get("#navbarSupportedContent a[href*='about']").click()
            cy.get(".mt-50 h2").should('contain', "Welcome to QAClick Academy")
        })

    })
})