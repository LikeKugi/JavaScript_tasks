const x = 7;
const f = (x) => () => () => x;
console.log(f(10)()());