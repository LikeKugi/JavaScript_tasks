// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'mail' или 'XXX', а иначе false.

const checkSpam = (str) => {
    const pattern1 = /mail/i;
    const pattern2 = /xxx/i;

    return pattern1.test(str) || pattern2.test(str);
}

console.log(checkSpam('tell mail now'));
console.log(checkSpam('xxxxx is in the game'));
console.log(checkSpam("innocent rabbit"));
console.log(checkSpam('XxXxX is in the game'));