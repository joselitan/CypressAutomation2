/// <reference types="Cypress" />

describe('My First Test Suite', function () {
    it('My firstTest case', function () {
        cy.visit(Cypress.env('url') + "seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        //Parent child chaining
        cy.get('.products').find('.product').should('have.length', 4)

        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                //$el.find('button').click()
                cy.wrap($el).find('button').click()
            }
        })

        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        //this is to print in logs
        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())
        })

    })
})