class CriarConta {
    /* Declaração de variaveis para receber atributos que serão acessado*/
    firstname = '#firstname'
    lastname =  '#lastname'
    email = '#email_address'
    password = '#password'
    passwordcheck = '#password-confirmation'
    BtnCreate = '#form-validate > .actions-toolbar > div.primary > .action'


    criandoconta(){
        /* Comandos para preenchimento de dados pessoas do usuário:
        Nome
        Sobrenome
        Email
        Senha
        Confirmação de senha
        e por ultimo um click no botão para confirmar a criação da conta */
        cy.get(this.firstname).type('Joel')
        cy.get(this.lastname).type('Santana')
        cy.get(this.email).type(`d${Math.floor(Math.random()*10000)}a${Math.floor(Math.random()*1000)}@hotmail.com`)
        cy.get(this.password).type('52NnaHR45U8yub')
        cy.get(this.passwordcheck).type(`52NnaHR45U8yub`)
        cy.get(this.BtnCreate).click()
    }

}

export default CriarConta