// Напишите функцию, которая в зависимости от параметра even или odd возвращает
// случайное целое четное (even) или не четное (odd) число от 10 до 20.
// Для генерации случайного числа используйте t13.

function t13(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function t21(s) {
    let num = t13(10, 20);
    if (s === 'even') {
        if (num % 2) return num + 1 < 20 ? num +1 : num - 1;
        return num;
    }
    else {
        if (!(num % 2)) return num + 1 < 20 ? num +1 : num - 1;
        return num;
    }
}


console.log( 10 + t21('odd') + 20);
