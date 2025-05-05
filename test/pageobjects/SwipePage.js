class SwipePage {
  get carousel() {
    return $("~Carousel");
  }

  async deslizarHorizontal() {
    for (let i = 0; i < 5; i++) {
      await browser.swipe({
        direction: "left",
        duration: 5000,
        percent: 0.5,
        scrollableElement: $("~Carousel"),
      });
    }
  }

  get ultimoCarousel() {
    return $('//android.widget.TextView[@text="COMPATIBLE"]');
  }

  async validarSeUltimoCarouselEhCompatible() {
    await expect(this.ultimoCarousel).toBeDisplayed();
    await expect(this.ultimoCarousel).toHaveText("COMPATIBLE");
  }

  get textoNoFinalDaPagina() {
    return $('//android.widget.TextView[@text="You found me!!!"]');
  }
  async deslizarVerticalmenteAteTextoNoFinalDaPagina() {
    await this.textoNoFinalDaPagina.scrollIntoView();
  }

  async validarTextoNoFinalDaPagina(texto) {
    await expect(this.textoNoFinalDaPagina).toBeDisplayed();
    await expect(this.textoNoFinalDaPagina).toHaveText(texto);
  }
}

module.exports = new SwipePage();
