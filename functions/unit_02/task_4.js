// Напишите функцию t4, которая делит число a на b и результат выводит. Если b равно нулю, то выводится аргумент c.

function t4(a, b, c) {
    if (b) {
        console.log(a / b);
    } else {
        console.log(c);
    }
}

t4(7, 12, false);
t4(7, 0, false);