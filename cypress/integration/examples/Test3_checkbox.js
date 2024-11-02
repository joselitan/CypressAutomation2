/// <reference types="Cypress" />

describe('My Second Test Suite', function () {
    it('My firstTest case', function () {
        //Check boxes
        cy.visit(Cypress.env('url') + "AutomationPractice")
        cy.get('input#checkBoxOption1')
            .check()
            .should('be.checked')
            .and('have.value', 'option1')
        cy.get('input#checkBoxOption1')
            .uncheck()
            .should('not.be.checked')
        cy.get('input[type="checkbox"]')
            .check(['option2', 'option3'])

        //Static Dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        //Dynamic Dropdown
        cy.get('#autocomplete').type('per')

        cy.get('.ui-menu-item div')
            .each(($e1, index, $list) => {

                if ($e1.text() === "Peru") {
                    cy.wrap($e1).click()
                }
            })
        //autocomplete
        cy.get('#autocomplete').should('have.value', 'Peru')
        //visible invisible
        cy.get('input#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('input#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('input#displayed-text').should('be.visible')
        //radio button
        cy.get('[value="radio2"]').check().should('be.checked')

    })
})