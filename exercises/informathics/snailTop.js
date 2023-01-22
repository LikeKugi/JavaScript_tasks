// Улитка ползёт по вертикальному шесту высотой h метров, поднимаясь за день на a метров, а за ночь спускаясь на b метров. На какой день улитка доползёт до вершины шеста?
//
//     Входные данные
//
// Программа получает на вход натуральные числа h, a, b. Гарантируется, что a>b.
//
//     Выходные данные
//
// Программа должна вывести одно натуральное число.

const h = +prompt();
const a = +prompt();
const b = +prompt();


const getHeight = (h, a, b) => {
    let currentHigh = 0;
    let days = 0;
    while (currentHigh < h) {
        days += 1;
        currentHigh += a;
        console.log(`current = ${currentHigh}`);
        if (currentHigh >= h) return days;
        currentHigh -= b;
    }
}

console.log(getHeight(10, 3, 2));

console.log(getHeight(20, 7, 3));