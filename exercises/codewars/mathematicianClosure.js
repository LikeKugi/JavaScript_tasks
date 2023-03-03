// You are writing a function that takes two sets of arguments of arbitrary length.
// The return value will be the sum of the values of all of the arguments.
//
//     The function should contain at least 1 argument per set.

function calculate(...args) {
    let sum = 0;
    for (let v of args) sum += v;
    return (...dargs) => {
        for (let v of dargs) sum += v;
        return sum;
    }
}

console.log(calculate(1)(1), 2);
console.log(calculate(1,1)(1) , 3);
console.log(calculate(1,1)(1,-1), 2);
console.log(calculate(2,4)(3,7,1), 17);