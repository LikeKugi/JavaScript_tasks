// В этом задании в нашу функцию testDateTime передаются две строки вида "03 November 2017 04:17".
// Вам нужно превратить строки в даты, сравнить их. Для той, что больше получить день недели и вернуть его из функции.
//
// Название дня недели должно быть по-русски, с большой буквы, например: "Понедельник".

function testDateTime(a, b) {
    const DAYS = {
        1: "Понедельник",
        2: "Вторник",
        3: "Среда",
        4: "Четверг",
        5: "Пятница",
        6: "Суббота",
        0: "Воскресенье",
    };

    const firstDate = new Date(a);
    const secondDate = new Date(b);

    const day = firstDate > secondDate ? firstDate.getDay() : secondDate.getDay();
    console.log(DAYS[day]);
}

const a = "19 October 1909 10:27";
const b = "28 March 1909 00:59";

testDateTime(a, b);