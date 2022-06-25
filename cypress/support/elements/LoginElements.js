class LoginElements {
    paginaInicialPrimary = () => { return '.btn-primary'}
    logo = () => { return '#[data-testid="logo__navigation--pre-home"]'}
    primeiroCard = () => {return '#pre-home__card--varejo'}
    segundoCard = () => {return '#pre-home__card--po'}
    terceiroCard = () => {return '#pre-home__card--industria'}
    entrarLoja = () => {return '[data-testid="login__modal--show"]'}
    cadastro = () => {return '[data-testid="link-signup"]'}
    mensagemCPF = () => {return '.sc-dnqmqq'}
    inserirCPF = () => {return '[data-testid="cpf-input"]'}
    continue = () => {return '[data-testid="continue-button"]'}
    profObras = () => {return '[data-testid="professional-radio"]'}
    online = () => {return '#pre-home__card--varejo'}
    paginaObras = () => {return '#pre-home__card--po'}
    paginaIndustria = () => {return '#pre-home__card--industria'}
}

export default LoginElements;