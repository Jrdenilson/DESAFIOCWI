class Adress {
    /* Declaração de variaveis para receber atributos que serão acessado*/
    endereco = '#street_1'
    numero = '#street_2'
    cidade = '#city'
    telefone = '#telephone'
    estado = '#region_id'
    cep = '#zip'
    pais = '#country'
    lugar = Math.floor(Math.random()*27); // Variavel criada para receber um numero aleatório de 1 a 27(representando a quantidade de estados brasileiros)
    BtnSalvar = '#form-validate > .actions-toolbar > div.primary > .action > span'
    Msgenderecosalvo = '.message-success > div'

    preencher() {
        /* Esse comando preenche os dados obrigatórios de endereço e depois confirma a alteração do endereço.
        Os dados obrigatórios são: Rua, numero, cidade, telefone, país, estado e CEP. */
        cy.get(this.endereco).type('Rua do Comercio')
        cy.get(this.numero).type('13')
        cy.get(this.cidade).type('Córrego do Ouro')
        cy.get(this.telefone).type(`${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`)
        cy.get(this.pais).select(31)
        cy.get(this.estado).select(this.lugar)
        cy.get(this.cep).type(`${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}-${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`)
        cy.get(this.BtnSalvar).click()
        cy.get(this.Msgenderecosalvo).should('have.text', 'You saved the address.')
    }
}

export default Adress