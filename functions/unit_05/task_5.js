// Напишите функцию callBack5 такую, что принимает элементы массива и пушит их в res5 приведенные к toLowerCase().

const ar5 = ['GaLaxY', 'InFILtratoR', 'DaTaPad', 'APeX hQ'];
let res5 = [];
let callBack5 = el => res5.push(el.toLowerCase());

ar5.forEach(callBack5);

console.log(res5);