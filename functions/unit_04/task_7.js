// Напишите функцию стрелочную функцию t7, которая аналогична закомментированной функции. Все функции должны быть стрелочные.

// function t7(arg) {
//     let arr = arg.map(function (item) {
//         return item * 2;
//     })
//     return arr;
// }

const t7 = (arr) => arr.map(el => el * 2)


console.log(t7([4, 5, 6]));
