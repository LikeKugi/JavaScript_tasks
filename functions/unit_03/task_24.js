// Напишите функцию callback24, которая принимает параметр item и возвращает его возведенным во вторую степень.

const ar24 = [3, 4, 5, 6, 7, 8];

function t24() {
    let t = [];
    ar24.forEach(item => {
        let newItem = callback24(item);
        t.push(newItem);
    });
    return t;
}

function callback24(item) {
    return item ** 2;
}

console.log(t24());