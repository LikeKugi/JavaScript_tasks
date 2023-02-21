// Допишите функцию callBack3 такую, что принимает элементы массива из filter и возвращает true если это число.

const ar3 = [4, '5', 6];
let res3;
let callBack3 = el => typeof el === 'number';

res3 = ar3.filter(callBack3);

console.log(res3);