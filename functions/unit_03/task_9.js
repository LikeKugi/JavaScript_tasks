// Напишите функцию, которая принимает число и степень в которую нужно возвести число.
// Возвращает true если число возведенное в степень четное и false если не четное.

function t9(n, p) {
    return !(Math.pow(n, p) % 2);
}

console.log(t9(3, 3));
console.log(t9(4, 3));