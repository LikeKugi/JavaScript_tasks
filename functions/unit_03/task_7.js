// Напишите функцию, которая принимает аргумент и возвращает true если аргумент число и false во всех остальных случаях

function t7(arg) {
    return typeof arg === 'number';
}

console.log(t7(5));
console.log(t7('5'));
