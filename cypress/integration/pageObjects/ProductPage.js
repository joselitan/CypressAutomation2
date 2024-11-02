class ProductPage {

    getShopTitle() {
        return cy.get('h1')
    }

    getCheckoutButton() {
        return cy.get('.nav-link.btn')
    }


}

export default ProductPage;