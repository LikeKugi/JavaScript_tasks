/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */
i = 0;
const arr = [...Array(10)].map(el=>i++);
console.log(arr);

arr.push(...[...Array(5)].map(el=>++i**2));
console.log(arr);
console.log(arr.length);