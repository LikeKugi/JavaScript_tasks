"use strict";

let weatherMap = new Map([
    ['London', 10],
    ['Moscow', 7],
    ['Paris', 14]
]);

let reversedMap = new Map([...weatherMap].map(el => el.reverse()));

console.log(reversedMap)