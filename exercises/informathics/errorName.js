// В этом задании в нашу функцию передаются два параметра: целочисленная переменная ("а") и некоторая функция ("func").
// Вам необходимо запустить функцию "func", с переменной "а" в качестве аргумента. Но вот проблема - в функции, похоже,
// оказалась ошибка. Вам нужно возвратить имя (свойство "name") возникающей ошибки.


function testErrorFunc(a, func) {
    // Тут нужно написать решение
    let x = '';
    try {
        x = func(a);
    } catch(e) {
        x = e.name;
    }
    return x;
}

console.log(testErrorFunc(5, (a) => {throw EvalError}))