// Функции lessThan, greaterThan и isEqual в модуле comparers сравнивают две строки и возвращают true/false.
//
//     Сравнение идет по количеству заглавных символов в строке (больше заглавных — больше строка).
//
// Специальные символы (например, пробел) не имеют заглавных эквивалентов и в данном задании считаются заглавными.


const bigLettersCount = (str) => {
    // BEGIN (write your solution here)
    let counter = 0
    for (const letter of str) {
        if (letter === letter.toUpperCase()){
            counter += 1;
        }
    }
    return counter;
    // END
};


const compare = (first, second) => {
    const firstCount = bigLettersCount(first);
    const secondCount = bigLettersCount(second);

    // BEGIN (write your solution here)
    if (firstCount === secondCount) return 0;
    if (firstCount > secondCount) return 1;
    return -1;
    // END
};

const greaterThan = (first, second) =>
    compare(first, second) === 1;

const lessThan = (first, second) =>
    compare(first, second) === -1;

const isEqual = (first, second) =>
    compare(first, second) === 0;