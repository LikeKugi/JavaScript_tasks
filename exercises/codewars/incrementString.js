function incrementString (strng) {
    console.log()
    // return incrementedString
    let pattern = (/(\d+)$/)
    if (pattern.test(strng)) {
        console.log(strng.match(pattern));
        let num = strng.match(pattern)[0];
        if (num.startsWith('0')) {
            const zeroPad = (num, places) => String(num).padStart(places, '0')
            return strng.replace(pattern, zeroPad(+num + 1, num.length));
        }
        else {
            return strng.replace(pattern, +num+1);
        }
    }
    return strng + 1;
}


console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar99"), "foobar100");
console.log(incrementString("foobar099"), "foobar100");
console.log(incrementString(""), "1");

console.log(incrementString("fo99obar99"), "fo99obar100");