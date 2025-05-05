class HomePage {
  get botaoLoginTabBar() {
    return $("~Login");
  }

  async acessarLogin() {
    await this.botaoLoginTabBar.click();
  }

  get botaoSwipeTabBar() {
    return $("~Swipe");
  }

  async acessarSwipe() {
    await this.botaoSwipeTabBar.click();
  }

  get botaoFormsTabBar() {
    return $("~Forms");
  }

  async acessarForms() {
    await this.botaoFormsTabBar.click();
  }

  get botaoDragTabBar() {
    return $("~Drag");
  }

  async acessarDrag() {
    await this.botaoDragTabBar.click();
  }
}

module.exports = new HomePage();
