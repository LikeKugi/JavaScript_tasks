// Напишите функцию, t13, которая возвращает случайное целое число в заданном диапазоне min, max.

function t13(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(t13(100, 120));