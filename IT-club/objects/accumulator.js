class Accumulator {
    startingValue;
    value = 0;

    constructor(startingValue=1) {
        this.startingValue = startingValue;
        this.value += this.startingValue;
    }
    read(number=1) {
        this.value += number;
    }
}

let acc = new Accumulator();

acc.read();
acc.read(5);

console.log(acc.value);