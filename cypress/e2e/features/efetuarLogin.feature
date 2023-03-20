Feature: Efetuar Login

    Scenario: Deve logar com sucesso
        Given que eu acesse a página de login
        When eu informo usuario e senha e aciono o botão de login
        Then eu visualizo página de produtos

    Scenario: Deve exibir mensagem ao logar sem informar usuário
        Given que eu acesse a página de login
        When eu não informo o usuario e aciono o botão de login
        Then eu obtenho a mensagem de erro de usuario
    
    Scenario: Deve exibir mensagem ao logar sem informar senha
        Given que eu acesse a página de login
        When eu não informo a senha e aciono o botão de login
        Then eu obtenho a mensagem de erro de senha
    
    Scenario: Deve exibir mensagem ao logar sem informar usuário nem senha
        Given que eu acesse a página de login
        When eu não informo o usuário nem a senha e aciono o botão de login
        Then eu obtenho a mensagem de erro de usuário
    
    Scenario: Deve exibir mensagem ao logar informando usuário ou senha inválidos
        Given que eu acesse a página de login
        When eu informo o usuário ou a senha inválidos e aciono o botão de login
        Then eu obtenho a mensagem de erro de usuário inválido

    Scenario: Deve exibir mensagem ao logar com usuário bloqueado
        Given que eu acesse a página de login
        When eu informo um usuário com acesso bloqueado e aciono o botão de login
        Then eu obtenho a mensagem de erro de usuário bloqueado

    Scenario: Deve exibir mensagem ao acessar página de produtos sem estar autenticado
        Given que eu acesse a página de login
        When eu insiro o caminho da página de produtos
        Then eu obtenho a mensagem de erro de usuário não autenticado