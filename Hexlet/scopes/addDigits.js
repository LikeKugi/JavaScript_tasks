// Реализуйте функцию addDigits, которая работает следующим образом:
//
//     Дано неотрицательное целое число num.
//     Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.
const toDigits = (num) => String(num).split('');


function addDigits(n) {
    while (n > 9) {
        digits = toDigits(n);
        n = digits.reduce((a, x) => a + +x, 0);
        console.log(n);
    }
}

addDigits(15);
