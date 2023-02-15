// Не забываем, что функции можно вызывать внутри другой функции. Напишите функцию t3, запускает фукнции hello, и f2021.
// Если все сделано верно, то вы увидите текст hello 2023.

function hello() {
    return('Hello ');
}

function f2021(str) {
    return  str + 2023;
}


function t3() {
    console.log(f2021(hello()));
}

t3();