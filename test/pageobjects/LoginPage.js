class LoginPage {
  get capturaCampoEmail() {
    return $("~input-email");
  }

  get capturaCampoSenha() {
    return $("~input-password");
  }

  get capturaCampoConfirmaSenha() {
    return $("~input-repeat-password");
  }

  async preecherCadastro(email, senha, confirmaSenha) {
    await this.capturaCampoEmail.setValue(email);
    await this.capturaCampoSenha.setValue(senha);
    await this.capturaCampoConfirmaSenha.setValue(confirmaSenha);
  }

  async preecherLogin(email, senha) {
    await this.capturaCampoEmail.setValue(email);
    await this.capturaCampoSenha.setValue(senha);
  }

  get capturaBotaoCadastrar() {
    return $("~button-SIGN UP");
  }

  async clicaBotaoCadastrar() {
    await this.capturaBotaoCadastrar.click();
  }

  capturaMensagemErroEmailInvalido(mensagemEmVermelho) {
    return $(`android=new UiSelector().text("${mensagemEmVermelho}")`);
  }

  async validarMensagemErroEmail(mensagemASerValidada) {
    await expect(
      this.capturaMensagemErroEmailInvalido(mensagemASerValidada)
    ).toBeDisplayed();
  }

  get capturaMensagemAlertaAndroid() {
    return $(
      'android=new UiSelector().className("android.widget.FrameLayout").childSelector(new UiSelector().resourceId("android:id/message"))'
    );
  }

  async validarMensagemAlertaAndroid(messagem) {
    await expect(this.capturaMensagemAlertaAndroid).toBeDisplayed();
    await expect(this.capturaMensagemAlertaAndroid).toHaveText(messagem);
  }

  get capturaBotaoOkAlertaAndroid() {
    return $(
      'android=new UiSelector().className("android.widget.FrameLayout").childSelector(new UiSelector().resourceId("android:id/button1"))'
    );
  }

  async clicaBotaoOkAlertaAndroid() {
    await this.capturaBotaoOkAlertaAndroid.click();
  }

  get botaoAbaCadastro() {
    return $('android=new UiSelector().text("Sign up")');
  }

  async clicaBotaoAbaCadastro() {
    await this.botaoAbaCadastro.click();
  }

  get botaoAbaLogin() {
    return $('android=new UiSelector().text("Login")');
  }

  async clicaBotaoAbaLogin() {
    await this.botaoAbaLogin.click();
  }

  get capturaBotaoLogar() {
    return $("~button-LOGIN");
  }

  async clicaBotaoLogar() {
    await this.capturaBotaoLogar.click();
  }
}

module.exports = new LoginPage();
