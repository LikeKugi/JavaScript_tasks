// Вычислить факториал для числа.

function testFactorial(a) {
    let x = 1;
    // Тут нужно написать решение
    for (let i = 1; i < a+1; i++) {
        x *= i;
    }
    return x;
}

for (let i = 1; i < 20; i++) {
    console.log(i, testFactorial(i));
}
