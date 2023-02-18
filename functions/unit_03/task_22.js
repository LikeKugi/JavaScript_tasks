// Напишите функцию callback22, которая принимает параметр item и если он четный то возвращает true.
// Если все выполнено верно, то на выходе вы получите только массив четных элементов из массива ar22.

const ar22 = [3, 4, 5, 6, 7, 8];

function t22() {
    return ar22.filter(callback22);
}

function callback22(item) {
    return !(item % 2);
}

console.log(t22());