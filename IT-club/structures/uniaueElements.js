// Допустим, у нас есть массив arr.
//
//     Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

const unique = (arr) => {
    const elements = new Set()
    const outArr = [];
    for (let value of arr) {
        let val = value.split('').sort().join('');
        console.log(val);
        if ( elements.has( val ) ) continue;
        elements.add(val)
        outArr.push(value);
    }
    return outArr;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O