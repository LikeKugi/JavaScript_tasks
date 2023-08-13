function makeCounter() {
  let count = 0;

  /**
   * set initial value
   * @param {number} val
   */
  function set(val) {
    count = val;
  }

  function increase() {
    return ++count;
  }

  function decrease() {
    return --count;
  }

  function read() {
    console.log(count);
  }

  return {
    set,
    increase,
    decrease, read
  }
}

const fn = makeCounter();

fn.set(5);
fn.read();
fn.increase();
fn.increase();
fn.read();
fn.decrease();
fn.read();
