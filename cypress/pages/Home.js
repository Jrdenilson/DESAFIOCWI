class AcessarHome {
    /* Declaração de variaveis para receber atributos que serão acessado*/
    url = 'https://magento.softwaretestingboard.com/'
    BtnCreateAccount = '.panel li:last-child'

    acessar() {
        /* Comando para acessar a URL a ser testada */
        cy.visit(this.url);
    }

    createaccout() {
        /* Comando para clicar na opção "Create Account" */
        cy.get(this.BtnCreateAccount).click();
    }
} 

export default AcessarHome