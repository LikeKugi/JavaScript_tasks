// Да, мы отработали запуск одной функции внутри другой, но сейчас мы чуть усложним задачу,
// чтобы вы понимали как можно вкладывать фукнции одна в другую. Сразу оговорка, это ухудшает читабельность
// и разбор кода, пользуйтесь данным методом с умом. Сейчас мы создадим две фукнции hello которая выводит текст
// 'Hello ' и f2021, которая будет запускать hello и выводить += 2021. Эти функции уже написаны, ознакомьтесь с ними.
// Обратите внимание, они написаны внутри функции t4. Почему? Потому что если мы просто их напишем в коде,
// то они затрут функции с такими же именами выше по коду! А нам это не нужно.
// В чем суть задачи? Напишите функцию, t4_1 которая запускает функцию t4.
// Обратите внимание, как у нас запускаются функции t4_1-> t4->f2023->hello

function t4() {
    function hello() {
        return  'Hello ';
    }
    function f2023() {
        let str = hello();
        str += 2023;
        console.log(str)
    }
    f2023();
}

function t4_1() {
    t4();
}

t4_1();