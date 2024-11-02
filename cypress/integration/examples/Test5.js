describe('My Second Test Suite', function () {
    it('My firstTest case', function () {
        //Check boxes
        cy.visit(Cypress.env('url') + "AutomationPractice")

        cy.get('[name="courses"] tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if (text.includes("Python")) {
                cy.get('[name="courses"] tr td:nth-child(2)').eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })

    })
})