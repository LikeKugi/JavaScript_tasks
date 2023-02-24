// Напишите функцию, которая по заданной площади возвращает наименьший возможный периметр прямоугольника
// с целыми длинами сторон.

function minimumPerimeter(area) {
    // Your code here

    let minPer = Infinity;
    for (let i = 1; i <= area; i++) {
        if (Number.isInteger(area / i)) {
            minPer = (i * 2 + area / i * 2) < minPer ? (i * 2 + area / i * 2) : minPer;
        }
    }
    console.log('minPer',minPer);
    return minPer;
}

// let area = Number(prompt())
// console.log(minimumPerimeter(area))

console.log(minimumPerimeter(45));
minimumPerimeter(30);