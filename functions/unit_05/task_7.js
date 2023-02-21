// Напишите функцию callBack7 такую, что принимает элементы массива ar7 и возвращает true если они больше 10.

const ar7 = [5,7, 10, 20, 30, 60];
let res7;
let callBack7 = el => el > 10;

res7 = ar7.every(callBack7);

console.log(res7);