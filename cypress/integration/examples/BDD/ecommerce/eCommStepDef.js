/// <reference types="Cypress" />
import HomePage from "../../pageObjects/HomePage";
import ProductPage from "../../pageObjects/ProductPage";
import CheckOutReceiptPage from "../../pageObjects/checkOutReceipt";
import PurchasePage from "../../pageObjects/PurchasePage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const homePage = new HomePage()
const productPage = new ProductPage()
const checkOutReceiptPage = new CheckOutReceiptPage()
const purchasePage = new PurchasePage()

Given('I open Ecommerce page', () => {
    cy.visit(Cypress.env('url') + 'angularpractice/')
})
//when I add items to cart
When('I add items to cart', function () {
    homePage.getShopTab().click()
    Cypress.config('defaultCommandTimeout', 8000)
    globalThis.data.productName.forEach(function (productName) {
        cy.selectProduct(productName)
    })
    productPage.getShopTitle().contains('Shop Name')
    productPage.getCheckoutButton().click()

})
//And Validate the total prices
When('Validate the total prices', () => {
    cy.get('tr >td:nth-child(4) strong').each(($el, index, $list) => {
        const amount = $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = sum + Number(res)
    }).then(() => {
        cy.log(sum)
    })

    cy.get('h3 strong').then((element) => {
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(sum).to.equal(Number(total))
    })
})
then('select the country submit and verify thank you', () => {
    checkOutReceiptPage.getCheckOutSuccessBtn().click()
    purchasePage.deliveryLocation('India')
    purchasePage.selectLocation().click()
    purchasePage.selectCheckBox().click({ force: true })
    purchasePage.selectSubmitPurchase().click()
    purchasePage.assertSuccessPurchase('Success')
})