function sequenceSum(begin, end) {
    if (begin > end) {
        return NaN;
    }
    if (begin === end) {
        return begin;
    }
    return begin + sequenceSum(begin + 1, end);
}

console.log(sequenceSum(7, 2));
console.log(sequenceSum(0, 0));
console.log(sequenceSum(6, 6));
console.log(sequenceSum(1, -5));
console.log(sequenceSum(10, 5));
console.log(sequenceSum(0, 10));
