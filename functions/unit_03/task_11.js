// Напишите функцию, t11, которая возвращает cумму переданных ей аргументов (число). Используем arguments.
// Напишите функцию, t12, которая возвращает cумму переданных ей аргументов (число). Используем rest.

function t12(...args) {
    return args.reduce((a, x) => a + x);
}

function t11() {
    let sum = 0;
    for(const el of arguments) {
        sum += el;
    }
    return sum;
}

console.log(t11(33, 22, 44, 11, 55, 66, 11, 66));
console.log(t12(33, 22, 44, 11, 55, 66, 11, 66));