// Напишите рекурсивную функцию t6, которая вытаскивает из массива ar6 числа в массив ar6_res.

let ar6 = [
    5,
    [3, 4, 'h'],
    [[5, 6, 'b'], ['c', 7, [8]]],
    9,
    [[[[[10, 'i', 11, [12]]]]]]
];
let ar6_res = [];

function t6(arr) {
    if (!arr.length) return ar6_res
    let val = arr.pop();
    if (Array.isArray(val)) t6(val);
    if (typeof val === 'number') ar6_res.push(val)
    return t6(arr)
}

console.log(t6(ar6));