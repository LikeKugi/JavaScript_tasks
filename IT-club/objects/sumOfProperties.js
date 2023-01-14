let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let testEmpty = {};

const isEmpty = (obj) => {
    return !!Object.keys(obj).length;
}

const sumSalaries = (obj) => {
    let sum = 0;
    if (isEmpty(obj)) {
        for (const key in obj) {
            if (typeof obj[key] == "number") {
                sum += obj[key];
            }
        }
    }
    return sum;
}

const sum = sumSalaries(salaries);
console.log(sum)
console.log(sumSalaries(testEmpty));