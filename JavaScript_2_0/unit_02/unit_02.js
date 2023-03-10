// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
const [a, b] = [7, 9];
console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
const [c, d] = [7, 9];

document.querySelector(".out-2").textContent = c / d;

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.
const [e, f] = [3, 5];

document.querySelector(".out-3").textContent = e + f;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.
const [e1, f1] = ["3", 5];
document.querySelector(".out-4").textContent =
  e1 + f1 + ' | typeof e1 === "string"';

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.
const e2 = 3;
const f2 = 0;
document.querySelector(".out-5").textContent = e2 / f2;

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
const e3 = 3;
const f3 = "Hello";
document.querySelector(".out-6").textContent = e3 + f3;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
const e4 = 3;
const f4 = "Hello";
document.querySelector(".out-7").textContent = e4 * f4;

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

function t8() {
  const inp8 = document.querySelector("#inp-8");
  document.querySelector(".out-8").textContent = inp8.value;
}

document.querySelector(".b-8").onclick = t8;

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

function t9() {
  const inp9 = document.querySelector(".i-9");
  document.querySelector(".out-9").textContent = inp9.value;
  inp9.value = inp9.defaultValue ?? "";
}

document.querySelector(".b-9").onclick = t9;

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

function t10() {
  const inp10 = document.querySelector(".i-10");
  document.querySelector(".out-10").textContent = +inp10.value * 10;
  inp10.value = inp10.defaultValue ?? "";
}

document.querySelector(".b-10").onclick = t10;

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

function t11() {
  const inp11 = document.querySelector(".i-11");
  document.querySelector(".out-11").textContent = +inp11.value + 10;
  inp11.value = inp11.defaultValue ?? "";
}

document.querySelector(".b-11").onclick = t11;

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

function t12() {
  const userName = document.querySelector(".i-12_1").value;
  const userLastName = document.querySelector(".i-12_2").value;
  document.querySelector(
    ".out-12"
  ).textContent = `Hello, ${userName} ${userLastName}`;
}

document.querySelector(".b-12").onclick = t12;

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

function t13() {
  const inp13_1 = document.querySelector(".i-13_1");
  const inp13_2 = document.querySelector(".i-13_2");
  document.querySelector(".out-13").textContent =
    +inp13_1.value + +inp13_2.value;
  inp13_1.value = inp13_1.defaultValue ?? "";
  inp13_2.value = inp13_2.defaultValue ?? "";
}

document.querySelector(".b-13").onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

document.querySelector(".i-14").value = "hello";

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector(".i-15");
y.style.border = "2px solid red";

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

function t16() {
  const inp16_1 = document.querySelector(".i-16-1");
  const inp16_2 = document.querySelector(".i-16-2");
  document.querySelector(".out-16").textContent =
    +inp16_1.value + +inp16_2.value;
  inp16_1.value = inp16_1.defaultValue ?? "";
  inp16_2.value = inp16_2.defaultValue ?? "";
}

document.querySelector(".b-16").onclick = t16;

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

function t17() {
  const inpTxt = document.querySelector(".i-17").value;
  document.querySelector(".out-17").textContent = parseInt(inpTxt);
}

document.querySelector(".b-17").onclick = t17;

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

function t18() {
  const inpTxt = document.querySelector(".i-18").value;
  document.querySelector(".out-18").textContent = parseFloat(inpTxt);
}

document.querySelector(".b-18").onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

function t19() {
  const inp19_1 = document.querySelector(".i-19-1");
  const inp19_2 = document.querySelector(".i-19-2");
  document.querySelector(".out-19").textContent =
    +inp19_1.value + +inp19_2.value;
  inp19_1.value = inp19_1.defaultValue ?? "";
  inp19_2.value = inp19_2.defaultValue ?? "";
}

document.querySelector(".b-19").onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

function agetostr(age) {
  var txt;
  count = age % 100;
  if (count >= 5 && count <= 20) {
    txt = "лет";
  } else {
    count = count % 10;
    if (count == 1) {
      txt = "год";
    } else if (count >= 2 && count <= 4) {
      txt = "года";
    } else {
      txt = "лет";
    }
  }
  return txt;
}

function t20() {
  const firstName = document.querySelector(".i-20-1").value;
  const lastName = document.querySelector(".i-20-2").value;
  const age = +document.querySelector(".i-20-3").value;
  const occupation = document.querySelector(".i-20-4").value;
  const years = agetostr(age);
  document.querySelector(
    ".out-20"
  ).textContent = `Уважаемый ${firstName}, ${lastName}, ваш возраст ${age} ${years}, по професси вы ${occupation}`;
}

document.querySelector(".b-20").onclick = t20;
