// Напишите функцию, которая получает строку и возвращает "развернутую" строку.

function t20(s) {
    return s.split('').reverse().join('')
}

console.log(t20('hello'));
