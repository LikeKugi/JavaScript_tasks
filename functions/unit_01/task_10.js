// Напишите функцию, которая перебирает массив ar10 и в ar10_res записывает только числа из ar10.
// В конце функции t10 для вывода массива запустите функцию showArr.

let ar10 = [1, 2, 3, '4', '22', 8];
let ar10_res = [];

function showArr() {
    console.log(ar10_res.join('_'));
}

function t10() {
    ar10_res = [];
    for (const el of ar10) {
        if (typeof el === 'number') {
            ar10_res.push(el)
        }
    }
    showArr();
}

t10();