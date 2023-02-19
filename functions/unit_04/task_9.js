// Напишите функцию стрелочную функцию t9, которая аналогична закомментированной функции. Все функции должны быть стрелочные.

// function t9(arr) {
//     return arr.reduce(function (accum, item) {
//         return accum += item;
//     });
// }

const t9 = arr => arr.reduce((a, el) => a + el);

console.log(t9([20, 30, 40]));
