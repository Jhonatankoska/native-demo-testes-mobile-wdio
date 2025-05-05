class FormsPage {
  get campoTypeSomething() {
    return $("~text-input");
  }

  async preencherCampoTypeSomething(texto) {
    await this.campoTypeSomething.setValue(texto);
  }

  get campoYouHaveTyped() {
    return $("~input-text-result");
  }

  async validarCampoYouHaveTyped(textoEsperado) {
    const valor = await this.campoYouHaveTyped.getText();
    await expect(valor).toBe(textoEsperado);
  }

  get elementSwitch() {
    return $("~switch");
  }

  async alterarElementSwitch() {
    await this.elementSwitch.click();
  }

  get textoDoElementoSwitch() {
    return $("~switch-text");
  }

  async validarTextoDoElementoSwitch(textoEsperado) {
    const valor = await this.textoDoElementoSwitch.getText();
    await expect(valor).toBe(textoEsperado);
  }

  get Dropdown() {
    return $("~Dropdown");
  }

  async clicarDropdown(opcao) {
    await this.Dropdown.click();
    let texto = `android=new UiSelector().text("${opcao}")`;
    await $(texto).click();
  }

  async validarOpcaoSelecionadaNoDropdown() {
    const campo = await $(
      '//android.widget.EditText[@resource-id="text_input" and @text="Appium is awesome"]'
    );
    await expect(campo).toBeDisplayed();
    await expect(campo).toHaveText("Appium is awesome");
  }

  get botaoActive() {
    return $("~button-Active");
  }

  async clicarBotaoActive() {
    await this.botaoActive.click();
  }
}

module.exports = new FormsPage();
