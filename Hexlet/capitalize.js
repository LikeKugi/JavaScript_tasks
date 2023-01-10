function solution(line) {
    n = line.length;
    if (!n) {
        return line;
    }
    for (let i = 0; i < n; i++) {
        if ((line[i] === line[i].toLowerCase()) && (i === 0 || line[i - 1] === " ")) {
            const prefix = i > 0 ? line.slice(0, i) : '';
            const firstLetter = line[i];
            const removedLine = line.slice(i + 1);
            line = prefix + firstLetter.toUpperCase() + removedLine;
        }
    }
    return line;
}

testTexts = [
    'e E e E e ',
    'hello, world!',
    'brrr',
    'Brr r'
];

for (const text of testTexts) {
    console.log(text);
    console.log(solution(text));
}