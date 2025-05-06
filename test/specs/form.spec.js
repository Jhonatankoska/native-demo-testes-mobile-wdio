import HomePage from "../pageobjects/HomePage";
import FormsPage from "../pageobjects/FormsPage";
import LoginPage from "../pageobjects/LoginPage";

describe("Tela de Formulário", () => {
  it("Deve escrever no input e copiar no campo", async () => {
    await HomePage.acessarForms();
    await FormsPage.preencherCampoTypeSomething("Teste do QA");
    await FormsPage.validarCampoYouHaveTyped("Teste do QA");
  });

  it("Deve alterar o valor do Switch OFF", async () => {
    await FormsPage.alterarElementSwitch();
    await FormsPage.validarTextoDoElementoSwitch(
      "Click to turn the switch OFF"
    );
  });

  it("Deve alterar o valor do Switch ON", async () => {
    await FormsPage.alterarElementSwitch();
    await FormsPage.validarTextoDoElementoSwitch("Click to turn the switch ON");
  });

  it("Deve selecionar a opção Appium is awesome no Dropdown", async () => {
    await FormsPage.clicarDropdown("Erro is awesome");
    await FormsPage.validarOpcaoSelecionadaNoDropdown();
  });

  it("Deve exibir o alerta ao clicar no botão Active", async () => {
    await FormsPage.clicarBotaoActive();
    await LoginPage.validarMensagemAlertaAndroid("This button is active");
    await LoginPage.clicaBotaoOkAlertaAndroid();
  });
});
