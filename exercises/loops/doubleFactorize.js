// Дано число n (n > 0). Верните из функции значение двойного факториала:
// n!! = n * (n - 2) * (n - 4) ... * (n % 2 == 0 ? 2 : 1)

const doubleFactorize = (n) => {
    let total = 1;
    let start = n % 2 === 0 ? 2 : 1;
    for (let i = start; i <= n; i+=2) {
        total *= i;
    }
    return total;
}

for (const el of [5, 6, 3, 7]) {
    console.log(doubleFactorize(el));
}