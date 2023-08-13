function sum (a) {
  let currentValue = a | 0;

  function f(b) {
    currentValue += b;
    return f;
  }

  f[Symbol.toPrimitive] = () => `${currentValue}`;

  return f;
}

console.log(sum(1))
console.log(JSON.parse(sum(1)))
console.log(JSON.parse(sum(1)(2)))
console.log(JSON.parse(sum(1)(2)(3)))
console.log(JSON.parse(sum(1)(2)(3)(4)))
