// Написать генератор нечётных случайных чисел в диапазоне между n и m включительно.
// Учесть, что n и m могут быть отрицательными, а также может быть n > m или n < m.
// Вывести результат с помощью console.log.

const randomOdd = (min, max) => {
    [min, max] = [Math.min(min, max), Math.max(min, max)];
    let a = Math.floor(Math.random() * (max - min) + min);
    return a % 2 ? a : a + 1;
}

console.log(randomOdd(0, 100));
console.log(randomOdd(2, 5));
console.log(randomOdd(100, -5));
console.log(randomOdd(-3, -10));