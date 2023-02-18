// Напишите функцию которая принимает массив как аргумент и проверяет что в нем одни числа.
// Возвращает true если это так и false в противном.


function t25(arr) {
    return arr.every( el => typeof el === 'number');
}

console.log(t25([4, 5, 6]));
console.log(t25([4, '5', 6]));