// Напишите функцию, которая принимает число дробь (например 23.34) и параметр 'floor' или 'ceil'
// и возвращает число с соответствующим округлением ( либо floor либо ceil).


function t8(num, method) {
    return Math[method](num);
}

console.log(10 + t8(100.11, 'ceil'));
console.log(10 + t8(100.11, 'floor'))