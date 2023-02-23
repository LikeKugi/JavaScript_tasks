// Метод push мутирует массив. Давайте напишем pure функцию t10 которая принимает массив и любое количество чисел
// в качестве аргументов и возвращает новый массив равный исходному с добавленными в него числами
// (добавленным в конце массива).

function t10(arr, ...args) {
    return [...arr, ...args];
}

const ar = [1, 2, 3, 4, 5];
const newAr = t10(ar, 1,2, 3,4,5);
const anotherAr = t10(ar, 5, 6, 7, 8);
console.log(ar);
console.log(newAr);
console.log(anotherAr);