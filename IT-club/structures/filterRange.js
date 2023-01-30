// Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет в нём элементы между a и b и отдаёт массив этих элементов.
//
//     Функция должна возвращать новый массив и не изменять исходный.

const filterRange = (arr, a, b) => {
    const out = [];

    for (const el of arr) {
        if (el <= Math.max(a,b) && el >= Math.min(a,b)) {
            out.push(el);
        }
    }
    console.log(out)
    return out;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr ); // 5,3,8,1 (без изменений)