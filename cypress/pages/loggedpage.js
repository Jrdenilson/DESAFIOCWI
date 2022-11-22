class AccountPage {
    /* Declaração de variaveis para receber atributos que serão acessado*/
    EditAddress = '.box-billing-address > .box-actions > .action > span'

    editar(){
        /* Esse comando irá clicar para acessar a página de endereço */
        cy.get(this.EditAddress).click()
    }

}

export default AccountPage