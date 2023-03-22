// Напишите генератор массивов длиной count со случайными числами от n до m.
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
// Выведите результат с помощью console.log.

const randInt = (min=0, max=100) => {
    [min, max] = [Math.min(min, max), Math.max(min, max)];
    return Math.floor(Math.random() * (max - min) + min);
}

const generateRandIntArray = (count, n, m) => [...Array(count)].map( () => randInt(n, m));

console.log(generateRandIntArray(100, 0, 100));
console.log(generateRandIntArray(50, 2, 5));
console.log(generateRandIntArray(70, 100, -5));
console.log(generateRandIntArray(42, -3, -10));