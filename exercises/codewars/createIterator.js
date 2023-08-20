const createIterator = (array) => {
  let current = 0;

  function next() {
    if (current < array.length) {
      current += 1;
      return {
        value: array[current-1],
        done: current-1 >= array.length
      }
    }
    return {
      value: array[current],
      done: true
    }
  }

  return {
    next,
    get index() { return current },
  }
};


const array = ['One', 'Two'];
const iterator = createIterator(array);

console.log(iterator.next(), iterator.index)
console.log(iterator.next(), iterator.index)
console.log(iterator.next(), iterator.index)
console.log(iterator.next(), iterator.index)

