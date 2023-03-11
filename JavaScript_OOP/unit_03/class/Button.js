class Button {
  #width;
  #height;
  constructor(width, height, background, value) {
    this.width = width;
    this.height = height;
    this.background = background;
    this.value = value;
  }
  set width(value) {
    this.#width = this.validateNumber(value);
  }
  get width() {
    return this.#width;
  }
  set height(value) {
    this.#height = this.validateNumber(value);
  }
  get height() {
    return this.#height;
  }
  validateNumber(value) {
    return typeof value === "number" && value > 0 ? value : "auto";
  }
  render() {
    const btnEl = document.createElement("button");
    btnEl.style.width = this.width + "px";
    btnEl.style.height = this.height + "px";
    btnEl.style.backgroundColor = this.background;
    btnEl.textContent = this.value;
    return btnEl;
  }
}
