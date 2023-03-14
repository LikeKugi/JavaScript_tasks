class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  introduce() {
    return `I am ${this.name}. I am ${this.age}. I am from ${this.country}`;
  }
}

export default Person;
