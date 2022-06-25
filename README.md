**Teste API e automação JSM - QA **

A automação consiste em uso do BDD, com o framework Cucumber, utilizando também o Page Object um padrão de projeto muito utilizado por QAs para organização do código e fácil leitura do mesmo.
O teste de API foi criado no POSTMAN e exportado o arquivo `api.json` para ser utilizando com o newman

*Para rodar o teste, o passo a passo*

* Rodar o comando `npm install`

*Após o comando será instalada as dependências do Cypress e configurando o Cucumber e newman*

Na automação é possível rodar os testes de duas maneiras via front end, que sera visual para o usuário e backend que é o utilizado em pipelines de automação, como temos como exeplo o Jenkins, fazendo com que o teste rode por baixo dos panos.

Para abrir a aplicação de forma visual, basta rodar o comando:

`npm run open`

A aplicação do cypress irá abrir e terá o teste Login.feature, basta clicar no mesmo para rodar.

Para rodar a aplicação no terminal, basta rodar o comando:


`npm run test`

O teste irá iniciar automaticamente e ao fim será informado se o mesmo passou ou não se passar, teremos uma pasta `videos` na aplicação com o teste concluido, se não, terá uma pasta de screanshots contendo o print do momento que o erro ocorreu.

Caso a teste esteja em um sistema windows 10 / 11 utilizando WSL, segue link de um tutorial para instalar algumas libs para exportar a parte gráfica para o windows, rodando a aplicação utilizando as janelas do windows.

link: https://nickymeuleman.netlify.app/blog/gui-on-wsl2-cypress


`npm run testeAPI`

Ira roda rodar o teste utilizando o newman (linha de comando).
Para rodar o teste via postman basta abrir o mesmo ir em colletion e importar selecionando o arquivo `api.json` dentro da pasta API, após isso basta dar um RUN na colletion. 
