// Допишите функцию callBack1 такую, что принимает элементы массива из map и возвращает их возведенные в 3 степень.

const ar1 = [4, 5, 6];
let res1;
let callBack1 = (el) => el ** 3;

res1 = ar1.map(callBack1);

console.log(res1);