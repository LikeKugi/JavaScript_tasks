// Напишите функцию замыкание createCount. Внутри функции создайте count равный переданному в createCount аргументу
// ( по умолчанию равен 0) и сделайте return функции, которая увеличивает count на 1 и возвращает его.

function createCount(i=0) {
    return () => i += 1;
};

let count4 = createCount(444);

console.log(count4());
console.log(count4());