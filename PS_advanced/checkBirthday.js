"use strict";

const user1 = {
    name: 'Vasya',
    birthday: '04, 18, 2022'
}

function isBirthday(user) {
    const bday = new Date(user.birthday);
    const today = new Date();

    console.log(new Intl.DateTimeFormat('ru-RU').format(today));

    if (bday.getMonth() !== today.getMonth()) return false;
    return bday.getDate() === today.getDate();
}

console.log(isBirthday(user1))