function convertToRoman(num) {
    let converted = '';
    const encoding = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    };

    for (let key of Object.keys(encoding).sort((a, b) => +b - +a)) {
        while (num - key >= 0) {
            num -= key;
            converted += encoding[key];
        }
    }
    return converted;
}

// console.log(convertToRoman(83));

//

for (let test of [2, 3, 4, 5, 9, 12, 16, 29, 44, 45, 68, 83, 97, 99, 400, 500, 501, 649, 798, 891, 1000, 1004, 1006, 1023, 2014, 3999]) {
    console.log(`${test}: ${convertToRoman(test)}`);
}