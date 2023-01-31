// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

const lettersCounter = (word) => {
    return word.split('').sort();
}

const aclean = (arr)=> {
    const counter = new Set()
    const outArr = []
    for (let el of arr) {
        let val = lettersCounter(el.toLowerCase()).join('');
        if (counter.has(val)) continue;
        counter.add(val)
        outArr.push(el);
    }
    console.log(counter)
    return outArr;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"