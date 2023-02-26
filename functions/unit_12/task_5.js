// Напишите функцию замыкание generatePassword, которая принимает аргумент - массив символов, и содержит
// в себе две функции. Первая функция randomInteger(min, max) возвращает случайное целое число в диапазоне,
// а вторую функцию возвращает (делает return). Данная функция, которую возвращают должна возвращать случайный символ
// из массива переданного функции generatePassword в качестве аргумента.

function generatePassword(arr) {
    const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    return () => arr[randomInteger(0, arr.length-1)]
}

let password = generatePassword(['b', 'y', 'Y', 'b', 'z']);
console.log(password());
