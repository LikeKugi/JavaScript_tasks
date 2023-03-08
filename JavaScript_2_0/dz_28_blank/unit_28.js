// Task 1
// Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.

class Goods {
  #image;
  #count;
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
    this.#image = "";
    this.#count = 0;
  }
  set image(value) {
    this.#image = value;
  }
  get image() {
    return this.#image;
  }
  set count(value) {
    this.#count = value;
  }
  get count() {
    return this.#count;
  }
  draw(elem) {
    let parentNode = document.querySelector(elem);
    let childElem = `<div>
    <img src=${this.image} alt=${this.name} width="50px">
    <h4>NAME: ${this.name}</h4>
    <p>AMOUNT: ${this.amount}</p>
</div>`;
    parentNode.innerHTML += childElem;
  }
}
const supply = new Goods("testname", 5);
console.log(supply);
//Task 2.
//  Добавьте в класс Goods свойства image и count - картинка и количество на складе.
supply.image = "img/1.png";
supply.count = 3;
//Task 3.
//  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).
supply.draw(".cart");
// Task 4.
// Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.
const goods2 = new Goods("new good", 15);
goods2.image = "img/2.png";
goods2.count = 15;
goods2.draw(".out-4");
//Task 5.
// Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.
class Goods2 extends Goods {
  #sale;
  constructor(name, amount) {
    super(name, amount);
    this.#sale = true;
  }
  set sale(value) {
    this.#sale = value;
  }
  get sale() {
    return this.#sale;
  }
  draw(elem) {
    let parentNode = document.querySelector(elem);
    let nodeSale = "";
    if (this.sale) {
      nodeSale = "<strong>Hot Sale!!!</strong>";
    }
    let childElem = `<div>
    ${nodeSale}
    <img src=${this.image} alt=${this.name} width="50px">
    <h4>NAME: ${this.name}</h4>
    <p>AMOUNT: ${this.amount}</p>
</div>`;
    parentNode.innerHTML += childElem;
  }
}
// Task 6.
// Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.
const goods3 = new Goods2("good3", 10);
goods3.image = "img/3.png";
goods3.count = 5;
goods3.draw(".out-6");
// Task 7.
// Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.
class Valid {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.isValid = false;
  }
  validate() {
    this.isValid = this.password.length >= 6;
  }
}
//Task 8.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.
const testUser1 = new Valid("mail@mail.com", "12345");
testUser1.validate();
console.log(testUser1.isValid);
//Task 9.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.
const testUser2 = new Valid("mail@mail.com", "1234567");
testUser2.validate();
console.log(testUser2.isValid);
//Task 10.
// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.
class Valid2 extends Valid {
  constructor(email, password) {
    super(email, password);
    this.emailError = "";
    this.passwordError = "";
  }
  validate() {
    if (this.password.length < 6) {
      this.passwordError = "min length 6";
      return;
    }
    if (this.email.length < 1) {
      this.emailError = "email empty";
      return;
    }
    this.isValid = true;
  }
}
//Task 11.
// Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
const valid2 = new Valid2("", "1234567");
valid2.validate();
console.log(valid2.isValid, valid2.emailError);
//Task 12.
// Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
const valid3 = new Valid2("email@mail.com", "1234567");
valid3.validate();
console.log(valid3);
