class PurchasePage {

    deliveryLocation(location) {
        return cy.get('#country').type(location)
    }

    selectLocation() {
        return cy.get('.suggestions > ul > li > a')
    }

    selectCheckBox() {
        return cy.get('#checkbox2')
    }

    selectSubmitPurchase() {
        return cy.get('input[type="submit"]')
    }

    assertSuccessPurchase(successMsg) {
        //return cy.get('.alert').contains(successMsg)
        cy.get('.alert').then((successMsg) => {
            const actualText = successMsg.text()
            expect(actualText.includes('Success')).to.be.true
        })
    }



}

export default PurchasePage;