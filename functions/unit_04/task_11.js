// Запустите функцию f11. Изучите как выглядит arguments. Запустите функцию t11. Изучите что будет выведено.

function f11() {
    console.log(arguments);
}

const t11 = () => {
    try {
        console.log(arguments);
    }
    catch (err) {
        console.log('argument not defined')
    }
}

f11(77, 88, 99);
t11(55, 44, 66);