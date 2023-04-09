// Закончите функцию, которая возвращает строку, при печати напоминающую Кубик Рубика.
// Функция cube имеет один целочисленный параметр n размера кубика.

function cube(n) {
    let out = [];
    for (let i = 1; i <= n; i++) {
        out.push(" ".repeat(n - i) + "/\\".repeat(i) + "_\\".repeat(n));
    }
    for (let i = n; i >= 1; i--) {
        out.push(" ".repeat(n - i) + "\\/".repeat(i) + "_/".repeat(n));
    }
    return out.join('\n');
}

// let n = Number(prompt())
// console.log(cube(n))

for (let i = 1; i < 10; i++) {
    console.log(cube(i))
}