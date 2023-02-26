// В скобках напишите код функции замыкания, которая создает переменную count = 0 и возвращает анонимную функцию, которая в свою очередь увеличивает count на 1 и возвращает его.

let count3 = (function () {
    let i = 0;
    return () => i += 1;
})();
console.log(count3());
console.log(count3());
console.log(count3());
console.log(count3());
console.log(count3());
