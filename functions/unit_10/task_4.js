// Функция t4 с помощью randomInteger генерирует случайное число от 0 до 10 и проверяет его наличие в массиве ar4.
// Если число уже есть - выполняет генерацию заново. Если нет - возвращает это число.

let ar4 = [3, 4, 6, 7, 8];

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function t4() {
    let num = randomInteger(0, 10);
    if (ar4.includes(num)) return t4();
    return num;
}

console.log(t4());