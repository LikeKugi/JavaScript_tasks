// Создайте функцию getRandomInt, которая выводит случайное целое число от 117 до 132.
// Все переменные должны быть внутри функции. Запустите эту функцию.

const getRandomInt = () => {
    console.log(117 + Math.floor(Math.random() * (132 - 117 + 1)));
}

getRandomInt()