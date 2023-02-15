// Давайте усложним задачу. У нас есть функцию getRandomInt2 которая использует переменные min, max выводит случайное
// целое число. Напишите функцию t6, которая запускает getRandomInt2, после чего, получает сгенерированное число
// и определяет четное оно или нет. Если четное, запускает функцию even, если нет - odd.
// Обратите внимание, как написаны функции even, odd.
function t6() {
    function odd() {
        console.log('odd');
    }
    function even() {
        console.log('even');
    }
    min = 10000;
    max = 10099;

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // тут запускаете getRandomInt
    let number = getRandomInt(min, max)
    console.log(number)
    
    if (number % 2) {
        odd()
    } else {
        even()
    }
}

t6();