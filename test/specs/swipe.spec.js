import SwipePage from "../pageobjects/SwipePage";
import HomePage from "../pageobjects/HomePage";

describe("Tela Swipe", () => {
  it("Deve deslizar horizontalmente para a esquerda até encontrar ultimo card do carousel", async () => {
    await HomePage.acessarSwipe();
    await SwipePage.deslizarHorizontal();
    await SwipePage.validarSeUltimoCarouselEhCompatible();
  });

  it("Deve deslizar verticalmente até último texto da página", async () => {
    await SwipePage.deslizarVerticalmenteAteTextoNoFinalDaPagina();
    await SwipePage.validarTextoNoFinalDaPagina("You found me!!!");
  });
});
