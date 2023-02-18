// Напишите функцию, которая принимает три аргумента: num1, num2 - числа и sign - строку знак операции.
// sign может быть равен '+', '-', '/', '*'. В зависимости от знака функция должна возвращать результат
// выбранной операции над числами. Например, передали числа 10 и 5 и знак '/'. Функция должна возвратить 2.

function t6(num1, num2, sign) {
    switch (sign) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return false;
    }
}

console.log(t6(5, 2, '+'));
console.log(t6(5, 2, '-'));
console.log(t6(5, 2, '*'));
console.log(t6(5, 2, '/'));
