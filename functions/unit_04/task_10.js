// Запустите функцию f10. Изучите, что она выводит в качестве this. Запустите t10. Изучите что выводит она в качестве this.


function f10() {
    console.log('f10');
    console.log(this); // Object [global]
    console.log();
}

const t10 = () => {
    console.log('t10');
    console.log(this); // {}
}

f10();
t10();