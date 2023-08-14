/**
 *
 * @param {Function} fn
 * @param {number} ms
 */
function debounce(fn, ms) {
  let callFlag = false;
  function inner(...args) {
    if (callFlag) return;
    callFlag = true;
    const result = fn.call(this, ...args);
    setTimeout(() => callFlag = false, ms);
    return result;
  }

  return inner;
}

const f = debounce(console.log, 1000);

f(1);
f(2);

setTimeout(() => f(3), 100);
setTimeout(() => f(4), 1100);
setTimeout(() => f(5), 1500);
