// Дано целое число n, большее 1. Найти квадрат данного числа, используя формулу
//     n^2 =1+3+5+...+(2∗n−1) .
//     Из функции необходимо вывести строку, состоящую из чисел, получающихся на каждом шаге при добавлении
//     каждого слагаемого (таким образом, получится строка из квадратов всех чисел от 1 до n).

const squaresLine = (n) => {
    const out = [];
    let total = 0;
    for (let i = 1; i <= 2*n-1; i+=2) {
        out.push(i + total);
        total += i;
    }
    return out.join(' ')
}

console.log(squaresLine(8))