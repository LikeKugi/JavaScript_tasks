// This time no story, no theory. The examples below show you how to write function accum:

// a.push(x.toUpperCase() + x.toLowerCase().repeat(i))

function accum(s) {
    // your code
    return s.split('').reduce(
        (a, x, i) => {
            return a.concat(x.toUpperCase() + x.toLowerCase().repeat(i))
        }
        , []).join('-')
}

console.log(accum("ZpglnRxqenU")=== "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")