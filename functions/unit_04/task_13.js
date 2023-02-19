// Напишите стрелочную функцию, t13, которая возвращает случайное целое число в заданном диапазоне min, max.

const t13 = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

console.log(t13(100, 120));
