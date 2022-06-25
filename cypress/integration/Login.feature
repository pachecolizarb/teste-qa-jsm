Feature: Acessar site JSM e realizar cadastro


    Scenario: Acessar o site da JSM
      Given acesso o site JSM
      When carregar a página
      Then devo visualizar as informações 
    
    Scenario: Acessar página para para inserir CPF
      Given que clico em 'entrar'
      When quando aparecer a modal e clicar em Clique aqui e Junte-se a nós!
      Then deve apresentar mensagem para inserir CPF

    Scenario: Iniciar cadastro e validar se existe a profissão pedreiro
      Given que insiro o CPF
      When clicar em continuar
      And em Trabalho em obras ou reformas, dentro da lista
      Then deve conter pedreiro

     Scenario: Validar o acesso a página logista/vendedor loja
      Given que estou na página inicial
      When clicar em logista / vendedor loja
      Then deve redirecionar para página de varejo

    Scenario: Validar o acesso a página profissional de obra
      Given que estou na página inicial
      When clicar em profissional de obra 
      Then deve redirecionar para página do profissional

    Scenario: Validar o acesso a página industria
      Given que estou na página inicial
      When clicar em industria
      Then deve redirecionar para página da industria