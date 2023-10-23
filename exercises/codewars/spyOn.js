function spyOn (func) {
  let counter = 0;
  const dataArgs = new Set();
  const dataRes = new Set();
  const inner = (...args) => {
    args.forEach(a => dataArgs.add(a));
    counter += 1;
    const result = func.apply(this, args)
    dataRes.add(result);
    return result;
  }
  inner.callCount = () => counter
  inner.returned = (key) => dataRes.has(key)
  inner.wasCalledWith = (key) => dataArgs.has(key);
  return inner;
}

function returns1 () { return 1; }
var spy = spyOn(returns1);

console.log(spy.callCount(), 0);
console.log(spy.returned(1), false);
console.log(spy.wasCalledWith('hello'), false);

spy('hello', 'hi', 'howdy');
spy('goodbye', 'bye', 'see ya');

console.log(spy.callCount(), 2);
console.log(spy.returned(1), true);
console.log(spy.wasCalledWith('hi'), true);
console.log(spy.wasCalledWith('bye'), true);
