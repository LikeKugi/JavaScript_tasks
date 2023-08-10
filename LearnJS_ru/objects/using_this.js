function makeUser() {
  return {
    name: 'John',
    ref: this,
  }
}

const user = makeUser();
console.log(user.ref.name);
console.log(user.name);
console.log(user.ref);

