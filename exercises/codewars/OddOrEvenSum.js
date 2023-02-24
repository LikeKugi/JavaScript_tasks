// По заданному числу N определить, является ли сумма N последовательных чисел четной или нечетной.
//
//     Если сумма определенно является нечетным числом, вернуть Odd.
//     Если сумма определенно является четным числом, вернуть Even.
//     Если сумма может быть как нечетной, так и четной (в зависимости от того, какое первое число вы выберете),
//     вернуть Either.
const ODD = "Odd";
const EVEN = "Even";
const EITHER = "Either";

function oddOrEven(n) {

    return n % 2 ? EITHER : (n/2)%2 ? ODD : EVEN ;
}

// let N = Number(prompt());
// console.log(oddOrEven(N));

for (let i = 0; i < 20; i++) {
    console.log(i, oddOrEven(i));
}