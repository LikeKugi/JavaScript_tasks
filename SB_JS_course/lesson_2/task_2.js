// Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log.
// Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.

const countFraction = (a, b, n) => {
    console.log((a%1).toFixed(n), (b%1).toFixed(n));
}

countFraction(13.123456789, 2.123, 5);
countFraction(13.890123, 2.891564, 2);
countFraction(13.890123, 2.891564, 3);
