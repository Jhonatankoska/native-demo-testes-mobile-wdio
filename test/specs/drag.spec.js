import HomePage from "../pageobjects/HomePage";
import DragPage from "../pageobjects/DragPage";

describe("Tela de Drag", () => {
  it("Deve arrastar os elementos de acordo com sua figura até mensagem de sucesso", async () => {
    await HomePage.acessarDrag();
    await DragPage.dragAndDrop();
    await DragPage.validarMensagemSucesso();
  });
});
