/// <reference types = "Cypress"/>
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";
import CheckOutReceiptPage from "../pageObjects/checkOutReceipt";
import PurchasePage from "../pageObjects/PurchasePage";
describe("My Second Test Suite", () => {
    // runs once before al ltests in the block
    before(function () {
        let data;
        cy.fixture('example').then(function (data) {
            globalThis.data = data
        })
    })
    it('My FirstTest Case', () => {
        //Cypress.config('defaultCommandTimeout', 8000)
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const checkOutReceiptPage = new CheckOutReceiptPage()
        const purchasePage = new PurchasePage()

        cy.visit(Cypress.env('url') + 'angularpractice/')
        homePage.getEditBox().type(globalThis.data.name)
        homePage.getGender().select(globalThis.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', globalThis.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneaur().should('be.disabled')
        homePage.getShopTab().click()
        Cypress.config('defaultCommandTimeout', 8000)
        globalThis.data.productName.forEach(function (productName) {
            cy.selectProduct(productName)
        })
        productPage.getShopTitle().contains('Shop Name')
        productPage.getCheckoutButton().click()

        var sum = 0;
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

        checkOutReceiptPage.getCheckOutSuccessBtn().click()
        purchasePage.deliveryLocation('India')
        purchasePage.selectLocation().click()
        purchasePage.selectCheckBox().click({ force: true })
        purchasePage.selectSubmitPurchase().click()
        purchasePage.assertSuccessPurchase('Success')
    })

})