// Создайте функцию solution , которая принимает аргумент n и возвращает площадь треугольника высотой n
// и основанием n^2/2.
// Для возведения в квадрат используйте уже готовую функцию square.
import getTriangleArea from "./getTriangleArea";

const solution = (n) => getTriangleArea(n ,n**2/2)

console.log(solution(5))