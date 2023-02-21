// Допишите анонимную стрелочную функцию внутри forEach такую, что принимает элементы массива из forEach и
// пушит их в res6 приведенные к toLowerCase().

const ar5 = ['GaLaxY', 'InFILtratoR', 'DaTaPad', 'APeX hQ'];
let res6 = [];
ar5.forEach(el => res6.push(el.toLowerCase())); // сюда в скобки дописываете стрелочную функцию

console.log(res6);