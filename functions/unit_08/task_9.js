// Метод push мутирует массив. Давайте напишем pure функцию t9 которая принимает массив и число в качестве
// аргумента и возвращает новый массив равный исходному с добавленным в него числом ( добавленным в конце массива).


const t9 = (arr, num) => [...arr, num];

const ar = [1, 2, 3, 4]
const newAr = t9(ar, 5);
console.log(ar, newAr);
