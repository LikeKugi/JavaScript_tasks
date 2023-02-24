// Напишите рекурсивную функцию t5, которая генерирует целое число от 0 до 10 ( с помощью randomInteger)
// и добавляем его в массив ar5. Проверяет, если сумма элементов массива больше 30 - то прекращает свою работу,
// если меньше - запускается заново. Возвращает массив ar5 по результату работы.

let ar5 = [];

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function t5() {
    let num = randomInteger(0, 10);
    ar5.push(num);
    if (ar5.reduce((a, x) => a+x) + num > 30) return ar5;

    return t5();
}

console.log(t5());