const calculator = {
  x: 0,
  y: 0,
  read: () => {
    this.x = Math.floor(Math.random() * 100);
    this.y = Math.floor(Math.random() * 100);
    console.log(`x = ${this.x}; y = ${this.y}`);
  },
  sum: () => this.x + this.y,
  mul: () => this.x * this.y,
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
