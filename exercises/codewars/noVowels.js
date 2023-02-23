// Исходная строка, не содержащая английских гласных букв "А", "E", "I", "O", "U"
// (в этой задаче "Y" считается согласной).

function disemvowel(str) {
    const pattern = /[aeiou]/gi;
    return str.replaceAll(pattern, '');
}

// let str = prompt()
console.log(disemvowel('This website is for losers LOL!'))