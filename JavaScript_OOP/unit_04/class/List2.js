class List2 extends List {
  constructor(items, cssClass) {
    super(items);
    this.cssClass = cssClass;
  }

  render() {
    const ulNode = super.render(this.item);
    ulNode.classList.add(this.cssClass);
    return ulNode;
  }
}
