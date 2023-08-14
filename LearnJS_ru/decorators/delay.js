/**
 *
 * @param {function} fn
 * @param {number} ms
 */
function delay(fn, ms) {
  return function (...args) {
    setTimeout(() => fn.call(this, ...args), ms);
  }
}

const f1000 = delay(console.log, 1000);

f1000('test')

const user = {
  name: 'Alex',
  sayHi(times) {
    console.log(`Hi! I'm ${this.name}! `.repeat(times));
  }
}
user.sayHi(3);
user.sayHi = delay(user.sayHi, 1500);
user.sayHi(4);
