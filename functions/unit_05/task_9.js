// Напишите функцию callBack9 такую, что принимает элементы массива ar9 и возвращает true,
// если тип данных элемента boolean.

const ar9 = [5, 7, false, 10, 20, 30, 60];
let res9;
let callBack9 = el => typeof el === 'boolean';

res9 = ar9.some(callBack9);

console.log(res9);