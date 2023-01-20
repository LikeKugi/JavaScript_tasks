function Calculator() {
    this.x = 0;
    this.y = 0;

    this.read = function () {
        this.x = Math.floor(Math.random() * 100);
        this.y = Math.floor(Math.random() * 50);
    }

    this.check = function () {
        return `x: ${this.x}; y:${this.y}`
    }

    this.sum = function () {
        return this.x + this.y;
    }

    this.mul = function () {
        return this.x * this.y;
    }
}

let calc = new Calculator();

calc.read();
console.log(calc.check());
console.log(calc.sum());
console.log(calc.mul());