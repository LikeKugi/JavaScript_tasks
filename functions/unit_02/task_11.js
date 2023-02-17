// Напишите функцию, t11, которая выводит cумму переданных ей аргументов (число). Используем arguments.

function t11() {
    let s = 0;
    for (let n of arguments) {
        s += n;
    }
    console.log(s);
}


t11(33, 22, 44, 11, 55, 66, 11, 66);
