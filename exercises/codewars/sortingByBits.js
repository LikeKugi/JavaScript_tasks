function sortByBit(arr) {
    // your solution here
    const sortNum = (a, b) => +b - +a
    arr.sort((a, b) => {
        const a2 = a.toString(2).split('').sort(sortNum).join('').replace(/'0'/g, '');
        const b2 = b.toString(2).split('').sort(sortNum).join('').replace(/'0'/g, '');
        console.log(a, a2, b,  b2);
        if (a2 > b2) return 1;
        if (a2 < b2) return -1;
        if (a2 === b2) return a - b;
    })
    return arr;
}

let a = [3, 8, 3, 6, 5, 7, 9, 1];
sortByBit(a);
console.log(a, [1, 8, 3, 3, 5, 6, 9, 7]);

let b = [9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0];
sortByBit(b);
console.log(b, [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]);