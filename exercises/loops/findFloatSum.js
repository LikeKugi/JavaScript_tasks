// Дано число n (n > 0). Верните из функции следующую сумму:
// 1 + 1.5 + 2 + 2.5 + ... + n.

const findFloatSum = (n) => {
    let total = 0;
    for (let i = 1; i <= n; i+=0.5) {
        total += i;
    }
    return total;
}

console.log(findFloatSum(9))

for (let i = 0; i < 20; i++) {
    console.log(findFloatSum(i));
}