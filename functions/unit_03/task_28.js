// Напишите функцию, которая принимает два аргумента - строку и подстроку
// и если подстрока есть в строке - возвращает true, если нет false.

function t28(str, substr) {
    return str.includes(substr)
}


console.log(t28('hello my world', 'or'));