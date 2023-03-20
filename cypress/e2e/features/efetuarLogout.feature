Feature: Efetuar Logout

    Scenario: Deve exibir a página de login ao selecionar a opção de logout
        Given que eu esteja logado na aplicação
        When eu clico no botão de menu e aciono a opção logout
        Then eu visualizo a página de login da aplicação

    Scenario: Deve exibir mensagem ao acessar página de produtos após ter feito logout
        Given que eu esteja na página de logout
        When eu acesso a página de produtos
        Then eu obtenho a mensagem de erro de usuário não autenticado