// Даны координаты двух точек на плоскости, требуется определить, лежат ли они в одной координатной четверти или нет
// (все координаты отличны от нуля).

// const [x1, y1, x2, y2] = [...Array(4)].map(prompt).map(Number);

const getSquares = (x1, y1, x2, y2) => {
    return (x1 / Math.abs(x1) === x2 / Math.abs(x2)) && (y1 / Math.abs(y1) === y2 / Math.abs(y2))
}

console.log(getSquares(3, 3, 5, 1) ? 'YES' : 'NO');