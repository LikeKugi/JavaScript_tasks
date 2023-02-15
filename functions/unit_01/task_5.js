// Устали? У нас есть две функции. Одна even, вторая odd. Напишите функцию t5, которая получает число,
// проверяет его на четность и запускает even если число четное и odd если нет.

function odd() {
    console.log('odd');
}

function even() {
    console.log('even');
}

function t5() {
    const number = Math.floor(Math.random() * 100);
    console.log(number);
    if (number % 2) {
        odd()
    } else {
        even()
    }
}

t5()