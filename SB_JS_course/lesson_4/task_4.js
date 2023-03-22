// Сгенерировать массив чисел 1–31 включительно (числа месяца).
// Вывести с помощью console.log для каждого из чисел строку ${число} января, ${день недели}.
// День недели 1 января должен задаваться с помощью переменной, то есть программа должна корректно работать
// для любого дня недели, с которого начинается месяц.
// Подсказка 1: для дней недели можно создать массив с названиями дней, чтобы обращаться к нему по индексу.
// Подсказка 2: индекс дня недели можно вычислить с помощью операции остатка от деления.
let i = 0;
let dates = [...Array(31)].map(el => i+=1);
console.log(dates);
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let currentDay = Math.floor(Math.random() * 7);

console.log(currentDay)

for (let date of dates) {

    console.log(`${date}: ${days[currentDay]}`);

    currentDay = (currentDay + 1) % days.length;
}