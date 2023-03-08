// Winter is coming, you must prepare your ski holidays.
// The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves
// you have in your drawer.
//
//     Given an array describing the color of each glove, return the number of pairs you can constitute,
//     assuming that only gloves of the same color can form pairs.

function numberOfPairs(gloves)
{
    //My hands are freezing
    const pairs = new Map();
    gloves.forEach(el => pairs.has(el) ? pairs.set(el, pairs.get(el) + 1) : pairs.set(el, 1));
    let total = 0;
    pairs.forEach(el => total += Math.floor(el / 2));
    console.log(total);
    return total;
}

let tests = [
    [['red','red'],1],
    [['red','green','blue'],0],
    [['gray','black','purple','purple','gray','black'],3]
];

tests.forEach(a=>{
    console.log(numberOfPairs(a[0]),a[1], `Testing for ${a[0]}`);
});