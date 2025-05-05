class DragPage {
  async dragAndDrop() {
    const pares = ["l1", "l2", "l3", "r1", "r2", "r3", "c1", "c2", "c3"];

    for (const sufixo of pares) {
      const drag = await $(
        `android=new UiSelector().description("drag-${sufixo}")`
      );
      const drop = await $(
        `android=new UiSelector().description("drop-${sufixo}")`
      );

      await drag.dragAndDrop(drop);
      await driver.pause(500);
    }
  }

  get mensagemDeSucesso() {
    return $('android=new UiSelector().text("Congratulations")');
  }

  async validarMensagemSucesso() {
    await expect(this.mensagemDeSucesso).toBeDisplayed();
    await expect(this.mensagemDeSucesso).toHaveText("Congratulations");
  }
}

module.exports = new DragPage();
