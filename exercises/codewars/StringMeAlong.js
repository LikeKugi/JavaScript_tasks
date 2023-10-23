function createMessage(n) {
  const accum = [];
  accum.push(n);
  const fn = (a) => {
    if (a) {
      accum.push(a);
      return fn;
    }
    return accum.join(" ");
  };
  return fn;
}

console.log(createMessage("Hello")("World!")("how")("are")("you?")(), "Hello World! how are you?");
