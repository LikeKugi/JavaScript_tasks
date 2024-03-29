/**
 * val - initial state or 0
 * @param {number} val
 * @constructor
 */
function Accumulator(val = 0) {
  this.value = val;
  /**
   * add number to value
   * @param {number} num
   */
  this.read = function (num) {
    this.value += num;
  };
}

const randint = (max = 100, min = 0) => Math.floor(Math.random() * (max - min) + min);

const currentVal = new Accumulator(randint());
console.log(currentVal.value);

currentVal.read(randint());
currentVal.read(randint());

console.log(currentVal.value);
