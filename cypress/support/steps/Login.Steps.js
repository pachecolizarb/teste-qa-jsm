
import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage


    Given("acesso o site JSM", () => {
        loginPage.go();
    })

    When("carregar a página", () => {
        loginPage.logo();
    })

    Then("devo visualizar as informações", () => {
        loginPage.visualizarPaginaInicial();
    })

    Given("que clico em 'entrar'", () => {
        loginPage.entrar();
    })

    When("quando aparecer a modal e clicar em Clique aqui e Junte-se a nós!", () => {
        loginPage.cadastro();
    })

    Then("deve apresentar mensagem para inserir CPF", () => {
        loginPage.pgCadastro();
    })

    Given("que insiro o CPF", () => {
        loginPage.inserirCPF();
    })

    When("clicar em continuar", () => {
        loginPage.continuar();
    })

    And("em Trabalho em obras ou reformas, dentro da lista", () => {
        loginPage.obras()
    })

    Then("deve conter pedreiro", () => {
        loginPage.result()
    })

    Given("que estou na página inicial", () => {
        loginPage.go()
    })

    When("clicar em logista / vendedor loja", () => {
        loginPage.varejo()
    })

    Then("deve redirecionar para página de varejo", () => {
        loginPage.varejoPagina()
    })

    Given("que estou na página inicial", () => {
        loginPage.go()
    })

    When("clicar em profissional de obra", () => {
        loginPage.profissionalObra()
    })

    Then("deve redirecionar para página do profissional", () => {
        loginPage.paginaObras()
    })

    Given("que estou na página inicial", () => {
        loginPage.go()
    })

    When("clicar em industria", () => {
        loginPage.profissionalindustria()
    })

    Then("deve redirecionar para página da industria", () => {
        loginPage.paginaIndustria()
    })