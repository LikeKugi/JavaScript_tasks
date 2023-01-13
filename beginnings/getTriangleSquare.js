// А тут вам нужно вычислить и вернуть из функции площадь треугольника.
// Передаваемые в функцию аргументы "a" и "b" - это длины сторон, а "c" - это угол между ними в градусах.
const getSin = (a) => {
    const radians = (a * Math.PI) / 180;
    return Math.sin(radians);
}
const getTriangleSquare = (a, b, c) => {
    return 1/2 * (a * b * getSin(c));
}

console.log(getTriangleSquare(2, 10, 16));