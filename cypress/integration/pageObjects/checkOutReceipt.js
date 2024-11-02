class CheckOutReceiptPage {

    getTotalPricesOfIndividualItems() {
        var sum = 0;
        cy.get('tr >td:nth-child(4) strong').each(($el, index, $list) => {
            const actualPrice = $el.text()
            var res = actualPrice.split(" ")
            res = res[1].trim()
            sum = sum + Number(res)
        }).then(() => {
            return sum
        })
    }


    getTotalAmount() {
        return cy.get('h3 strong').then((element) => {
            const actualAmount = element.text()
            var intAmount = actualAmount.split(" ")
            intAmount = intAmount[1].trim()
            const numberAmount = Number(intAmount)
            return cy.wrap(numberAmount)
        })
    }

    getCheckOutSuccessBtn() {
        return cy.get('button.btn.btn-success')
    }
}

export default CheckOutReceiptPage;