// Напишите функцию callback23, которая принимает параметр item и возвращает его возведенным во вторую степень.

const ar23 = [3, 4, 5, 6, 7, 8];

function t23() {
    return ar23.map(callback23);
}

function callback23(item) {
    return item ** 2;
}
console.log(t23());