function getLengthOfMissingArray(arrayOfArrays) {
    if (!Array.isArray(arrayOfArrays) || arrayOfArrays.length === 0 ) return 0;
    const mask = []

    for (let row of arrayOfArrays) {
        if (!Array.isArray(row) || arrayOfArrays.length === 0 ) return 0;
        let len = row.length;
        mask[len] = len;
    }
    console.log(mask)
    let start = Math.min(...mask.filter(el => typeof el === 'number'));
    console.log(start)
    for (let i = start; i< mask.length; i++) {
        if (!mask[i]) {
            return i;
        }
    }
}

// console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 3);
// console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 2);
// console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ), 2);
// console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ), 5);
//
// console.log(getLengthOfMissingArray([ ]), 0);

console.log(getLengthOfMissingArray([[2, 4, 0, 4, 2],
    [3, 3, 2, 3, 4, 1, 2, 2, 2, 4],
    [0, 2, 0, 4, 4, 4],
    [2, 2, 2, 0],
    [0, 4, 1, 0, 3, 2, 2, 1, 3],
    [3, 0, 3, 2, 1, 2, 2, 1],
    [1, 3, 3]] ), 7);