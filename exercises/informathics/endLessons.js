// В некоторой школе занятия начинаются в 9:00.
// Продолжительность урока — 45 минут, после 1-го, 3-го, 5-го и т.д. уроков перемена 5 минут,
// а после 2-го, 4-го, 6-го и т.д. — 15 минут. Определите, когда заканчивается указанный урок.

// Дан номер урока (число от 1 до 10).

const lastLesson = 3; //+prompt();
const START_HOURS = 9;
const START_MINUTES = 0;


const getTime = (count) => {
    console.log(`number of lessons: ${count}`);
    const smallBreaks = Math.floor((count) / 2);
    const bigBreaks = Math.floor((count - 1) / 2);

    const timeStudying = (count * 45) + ((count - 1) * 5) + Math.floor((count - 1) / 2) * 10;
    console.log(count * 45 + smallBreaks * 5 + bigBreaks * 15);
    console.log(`total: ${timeStudying} lessons: ${count} \n\t5min: ${smallBreaks} 15min: ${bigBreaks}`);

    const hours = START_HOURS + Math.floor(timeStudying / 60);
    const minutes = START_MINUTES + timeStudying % 60;

    console.log(`${hours%24} ${minutes > 9 ? minutes : '0' + minutes}\n`)
}

for (let i = 1; i < 20; i++) {
    getTime(i);
}