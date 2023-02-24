// Напишите рекурсивную функцию t7, которая вытаскивает из массива ar7 все строки в ar7_res.

let ar7 = [
    'hi',
    ['hii'],
    [['hiii']],
    [[['hiiii']]],
    ['i', [[[[[['hi']]]]]]]
];
let ar7_res = [];

function t7(arg) {
    if (!arg.length) return ar7_res;
    let val = arg.pop();
    if (typeof val === 'string') ar7_res.push(val);
    if (Array.isArray(val)) t7(val);
    return t7(arg)
}

console.log(t7(ar7))