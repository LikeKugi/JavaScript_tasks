// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

const ucFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('dear'));