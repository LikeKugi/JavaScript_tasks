// Напишите рекурсивную функцию t8, которая получает с помощью randomInt целое число от 1000 до 9000 и
// проверяет если сумма первых двух цифр числа равна сумме 3 и 4 числа то возвращает это число.
// Если нет - повторяет операцию. Например число 1235 не удовлетворяет этому условию, потому что 1+2 не равно 3+5.
// А вот число 7180  - удовлетворяет.

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function t8() {
    let num = randomInteger(1000, 9000);
    let digits = num.toString().split('').map(Number)
    if (digits[0] + digits[1] === digits[2] + digits[3]) return num;
    return t8();
}

console.log(t8());