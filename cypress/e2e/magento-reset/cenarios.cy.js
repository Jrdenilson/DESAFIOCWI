///    <reference types="cypress" />
/* Aqui são importada as páginas que foram criada */
import AcessarHome from '../../pages/Home'
import CriarConta from '../../pages/createacc'
import Adress from '../../pages/adresspage'
import AccountPage from '../../pages/loggedpage'
import FinishPage from '../../pages/finish'


describe('Magento', () => {
    const acessarHome = new AcessarHome();
    const criarConta = new CriarConta();
    const adress = new Adress();
    const accountPage = new AccountPage();
    const finishPage = new FinishPage();

    beforeEach('Visitar pagina', () => {
        acessarHome.acessar();    
    })

    it('Cenario de criação de conta de usuário no ecommerce ', () => {
        acessarHome.createaccout();
        criarConta.criandoconta();
        accountPage.editar();
        adress.preencher();
        finishPage.finalizar();

    })

})