// Допишите анонимную стрелочную функцию внутри filter такую, что принимает элементы массива из filter и
// возвращает true если это число.

const ar3 = [4, '5', 6];
let res4;
res4 = ar3.filter(el => typeof el === 'number'); // сюда в скобки дописываете стрелочную функцию

console.log(res4);