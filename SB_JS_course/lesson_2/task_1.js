// Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка, x2, y2 — вторая точка.
// Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками.
// Выведите результат с помощью console.log.

const countSquare = (x1, y1, x2, y2) => {
    return Math.abs((x1 - x2) * (y1 - y2));
}

console.log(countSquare(2, 3, 10, 5), 16);
console.log(countSquare(10, 5, 2, 3), 16);
console.log(countSquare(-5, 8, 10, 5), 45);
console.log(countSquare(5, 8, 5, 5), 0);
console.log(countSquare(8, 1, 5, 1), 0);
