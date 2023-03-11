class ModernButton extends Button {
  #bRad;
  constructor(width, height, background, value, bRad = 0) {
    super(width, height, background, value);
    this.bRad = bRad;
  }
  set bRad(value) {
    this.#bRad = super.validateNumber(value);
  }
  get bRad() {
    return this.#bRad;
  }
  render() {
    const btnEl = super.render();
    btnEl.style.borderRadius = this.bRad + "px";
    return btnEl;
  }
}
