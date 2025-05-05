import HomePage from "../pageobjects/HomePage";
import LoginPage from "../pageobjects/LoginPage";

describe("Tela de Login e Cadastro", () => {
  it("Deve cadastrar novo usuário com sucesso", async () => {
    await HomePage.acessarLogin();
    await LoginPage.clicaBotaoAbaCadastro();
    await LoginPage.preecherCadastro(
      "jhonatankoska@teste.com",
      "12345678",
      "12345678"
    );
    await LoginPage.clicaBotaoCadastrar();
    await LoginPage.validarMensagemAlertaAndroid("You successfully signed up!");
    await LoginPage.clicaBotaoOkAlertaAndroid();
  });

  it("Deve exibir mensagem de e-mail inválido no cadastro", async () => {
    await LoginPage.preecherCadastro("jhonatankoska", "12345678", "12345678");
    await LoginPage.clicaBotaoCadastrar();
    await LoginPage.validarMensagemErroEmail(
      "Please enter a valid email address"
    );
  });

  it("Deve logar e exibir mensagem de sucesso", async () => {
    await LoginPage.clicaBotaoAbaLogin();
    await LoginPage.preecherLogin("jhonatankoska@teste.com", "12345678");
    await LoginPage.clicaBotaoLogar();
    await LoginPage.validarMensagemAlertaAndroid("You are logged in!");
    await LoginPage.clicaBotaoOkAlertaAndroid();
  });

  it("Deve exibir mensagem de login inválido", async () => {
    await LoginPage.preecherLogin("jhonatankoska", "12345678");
    await LoginPage.clicaBotaoLogar();
    await LoginPage.validarMensagemErroEmail(
      "Please enter a valid email address"
    );
  });
});
