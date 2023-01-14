let testObject = {
    1: '21',
    2: 32,
    3: 'open',
};

let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
};

const multiplyNumeric = (obj) => {
    for (const key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(testObject)
console.log(testObject)

multiplyNumeric(menu)
console.log(menu)