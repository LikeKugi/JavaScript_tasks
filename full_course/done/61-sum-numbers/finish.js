/** ЗАДАЧА 61 - Сумма чисел
 *
 * 1. Создайте функцию "sumNumbers", которая будет суммировать все переданные ей аргументы.
 * Количество аргументов неизвестно
 *
 * 2. Используйте console.log внутри функции для вывода результата
 *
 * 3. Также верните эту сумму как результат функции
 */

console.log(sumNumbers(1, 3))
// 4

console.log(sumNumbers(10, 20, 5))
// 35

console.log(sumNumbers(2, 5, 80, 1, 10, 12))
// 110

function sumNumbers(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return(sum)
}
