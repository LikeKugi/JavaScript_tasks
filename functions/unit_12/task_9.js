// Напишите функцию замыкание generateDay, внутри которой создан массив days, с именами дней недели и
// return анонимной функции, которая получает аргумент n и возвращает days[n-1] день недели.

function generateDay() {
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    return function (n) {
        return days[(n-1)%days.length]
    };
}

const day = generateDay();
console.log(day(2))
console.log(day(3))
console.log(day(23))