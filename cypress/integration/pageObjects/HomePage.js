class HomePage {


    getEditBox() {
        return cy.get("div[class='form-group'] > input[name='name']")
    }

    getTwoWayDataBinding() {
        return cy.get('h4 > [name="name"]')

    }
    getGender() {
        return cy.get('select')
    }

    getEntrepreneaur() {
        return cy.get("#inlineRadio3")
    }

    getShopTab() {
        return cy.get(":nth-child(2) > .nav-link")
    }

}

export default HomePage;