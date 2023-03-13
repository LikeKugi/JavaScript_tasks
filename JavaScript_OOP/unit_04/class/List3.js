class List3 extends List {
  constructor(items, classes) {
    super(items);
    this.cssClass = [...classes];
  }

  render() {
    const ulNode = super.render(this.item);
    for (let cl of this.cssClass) {
      ulNode.classList.add(cl);
    }
    return ulNode;
  }
}
