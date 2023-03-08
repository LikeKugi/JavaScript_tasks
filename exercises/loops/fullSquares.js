// Квадраты
// Входные данные
//
// Вводятся целые числа a и b. Гарантируется, что a не превосходит b.
//
//     Выходные данные
//
// Выведите все числа на отрезке от a до b, являющиеся полными квадратами.
// Если таких чисел нет, то ничего выводить не нужно.

let [start, end] = [2, 8] //[...Array(2)].map(prompt).map(Number);
start = start > 0 ? Math.ceil(Math.sqrt(start)) : 0;
end = Math.floor(Math.sqrt(end));
function printRange(start, end) {
    console.log(start, end)
    let out = [];
    for (let i = start; i <= end; i++) {
        out.push(i**2)
    }
    return out.join(' ');
}

console.log(printRange(start, end))