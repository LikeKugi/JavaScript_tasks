class List {
  constructor(items) {
    this.item = [...items];
  }

  render() {
    const ulNode = document.createElement("ul");
    for (let it of this.item) {
      const liNode = document.createElement("li");
      liNode.textContent = it;
      ulNode.appendChild(liNode);
    }
    return ulNode;
  }
}
