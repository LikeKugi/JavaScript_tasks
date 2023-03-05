// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1() {
  document.querySelector(".out-1").textContent = this.value;
}

// ваше событие здесь!!!
document.querySelector(".i-1").addEventListener("input", t1);
// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2() {
  document.querySelector(".out-2").textContent = this.value
    .split("")
    .map((el) => el.charCodeAt(0))
    .join(" ");
}

// ваше событие здесь!!!
document.querySelector(".i-2").addEventListener("input", t2);
// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(e) {
  document.querySelector(".out-3").textContent = e.which > 57;
}

// ваше событие здесь!!!
document.querySelector(".i-3").addEventListener("keypress", t3);
// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {
  document.querySelector(".out-4").textContent = this.value
    .split("")
    .filter(
      (el) => typeof el === "string" && isNaN(+el) && el.toLowerCase() === el
    )
    .join("");
}

// ваше событие здесь!!!
document.querySelector(".i-4").addEventListener("input", t4);
// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
  document.querySelector(".out-5").textContent = this.value
    .split("")
    .filter(
      (el) => typeof el === "string" && isNaN(+el) && el.toUpperCase() === el
    )
    .join("");
}

// ваше событие здесь!!!
document.querySelector(".i-5").addEventListener("input", t5);
// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6() {
  document.querySelector(".out-6").textContent = this.value
    .split("")
    .filter(
      (el) => typeof el === "string" && isNaN(+el) && el.toLowerCase() === el
    );
}

// ваше событие здесь!!!
document.querySelector(".i-6").addEventListener("input", t6);
// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
  const a7 = this.value.split("");
  let index = Math.floor(Math.random() * a7.length);
  document.querySelector(".out-7").textContent = a7[index];
}

// ваше событие здесь!!!
document.querySelector(".i-7").addEventListener("change", t7);
// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8() {
  document.querySelector(".out-8").textContent = this.value
    .replace(/i/g, 1)
    .replace(/o/g, 0)
    .replace(/l/g, 7);
}

// ваше событие здесь!!!
document.querySelector(".i-8").addEventListener("change", t8);
// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

function t9(e) {
  let count = document.querySelector(".out-9").textContent;
  if (e.keyCode === 40)
    document.querySelector(".out-9").textContent = count ? +count + 1 : 1;
}

// ваше событие здесь!!!
document.querySelector(".i-9").addEventListener("keydown", t9);
// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

function t10(e) {
  console.log(e.keyCode);
  if (e.keyCode === 37 || e.keyCode === 39) {
    let width =
      parseInt(document.querySelector('img[src="img/1.png"]').style.width) ||
      parseInt(
        getComputedStyle(document.querySelector('img[src="img/1.png"]')).width
      );
    document.querySelector('img[src="img/1.png"]').style.width =
      width + 1 + "px";
  } else if (e.keyCode === 38 || e.keyCode === 40) {
    let height =
      parseInt(document.querySelector('img[src="img/1.png"]').style.height) ||
      parseInt(
        getComputedStyle(document.querySelector('img[src="img/1.png"]')).height
      );
    document.querySelector('img[src="img/1.png"]').style.height =
      height + 1 + "px";
  }
}
document.querySelector(".i-10").addEventListener("keydown", t10);
// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект.
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11(e) {
  let keyboard = document.querySelectorAll(".keyboard");
  let keyNumber = e.keyCode;
  keyboard.forEach((el) => {
    if (+el.dataset.key === keyNumber) {
      el.classList.add("active");
    } else {
      removeActive(el);
    }
  });
}
function removeActive(el) {
  el.classList.remove("active");
}

// ваше событие здесь!!!
document.querySelector(".i-11").addEventListener("keydown", t11);
