// Напишите функцию замыкание generateMonth, внутри которой создан массив month с названиями месяцев и
// return анонимной функции, которая получает аргумент n и возвращает month[n-1] название месяца.

function generateMonth() {
    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return (n) => month[(n-1) % month.length];
}
const month = generateMonth();
console.log(month(2));
console.log(month(3));
