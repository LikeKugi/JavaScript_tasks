// Чуть усложним. Сейчас первая задача жестко завязана на значения 117 и 132.
// Напишите функцию getRandomInt2, которая на основе min, max генерирует случайное целое число в этом диапазоне
// и выводит. Запустите эту функцию.

let min = 888;
let max = 900;

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(min, max));