// Найдите наибольший общий делитель чисел a и b. (Подсказка: вам поможет алгоритм Евклида и цикл while).

const gcd = (a, b) => {
    [a, b] = [Math.max(a, b), Math.min(a, b)];
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

for (let [a, b] of [[24, 182], [10, 99]]) {
    console.log(gcd(a, b));
}