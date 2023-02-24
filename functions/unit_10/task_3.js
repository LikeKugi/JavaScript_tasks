// Функция t3 принимает аргумент 'odd' или 'even' и должна возвратить четное или не четное число
// в диапазоне от 0 до 100. Решите задачу рекурсивно. Для генерации случайных чисел используйте функцию randomInteger.

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function t3(arg) {
    let num = randomInteger(0, 100)
    if (arg === 'odd') {
        if (num % 2) return num;
    } else {
        if (!(num % 2)) return num;
    }
    return t3(arg);
}


console.log(t3('odd'))