/// <reference types="Cypress" />

describe('My Second Test Suite', function () {
    it('My firstTest case', function () {
        cy.visit(Cypress.env('url') + "seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.wait(3000)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                //$el.find('button').click()
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        //cy.get('[type="button"]').contains('PROCEED TO CHECKOUT').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get('button').contains('Place Order').click()
    })
})