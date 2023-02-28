// Вы владелец компании по производству коробок.
//
//     Ваша компания может изготовить любой многоугольный ящик с равными сторонами,
//     но многие ваши клиенты хотят перевозить круглые объекты в этих коробках.
//     Круги -- очень распространенная форма в легкой промышленности.
//     Жестяные банки, стаканы, шины и компакт-диски -- вот лишь несколько примеров.
//
//     Вы решаете добавить в коробки следующую информацию:
//     Самый большой (диаметр) круглый объект, который может поместиться в данную коробку.

function circleDiameter(sides, sideLength) {
    // your code here
    return sideLength / (Math.tan(Math.PI / sides));
}

// let [sides, sideLength] = prompt().split(' ').map(Number)
// console.log(circleDiameter(sides, sideLength))

console.log(circleDiameter(4, 5));
console.log(circleDiameter(8, 9));
console.log(circleDiameter(3, 4));
