class FinishPage {
    Btnendereco = '.items > :nth-child(1) > a'
    url = 'https://magento.softwaretestingboard.com/customer/account/'

    finalizar() {
        
        cy.get(this.Btnendereco).click()
        cy.url(this.url).should('eq', 'https://magento.softwaretestingboard.com/customer/account/')
        
    }
}

export default FinishPage