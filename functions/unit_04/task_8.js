// Напишите функцию стрелочную функцию t8, которая аналогична закомментированной функции. Все функции должны быть стрелочные.

// function t8(arr) {
//     const arr2 = arr.filter(function (item) {
//         return item > 5;
//     });
//     return arr2;
// }

const t8 = (arr) => arr.filter(el => el > 5);



console.log(t8([3, 4, 5, 6, 7, 8]));

