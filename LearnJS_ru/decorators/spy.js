function spy(fn) {

  const cache  = new Map();
  function inner(...args) {
    if (cache.has(args.toString())) {
      return cache.get(args.toString());
    }

    const result = fn.call(this, ...args);
    cache.set(args.toString(), result);
    inner.calls.add(args);
    return result;
  }

  inner.calls = new Set();

  return inner
}

function work(a, b) {
  console.log(a + b);
}

work = spy(work)

work(1, 2);
work(4, 5);

for (let args of work.calls) {
  console.log('call: ', args.toString());
}
