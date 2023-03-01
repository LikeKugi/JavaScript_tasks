function calc(x){
    total1 = x.split('').map( e => e.charCodeAt(0) ).join('')
    total2 = total1.replace(/7/g, '1');
    // console.log(total1)
    // console.log(total2)
    // console.log(total1.split('').reduce((a, x) => a + +x, 0))
    // console.log(total2.split('').reduce((a, x) => a + +x, 0))
    return total1.split('').reduce((a, x) => a + +x, 0) - total2.split('').reduce((a, x) => a + +x, 0)

}

console.log(calc('abcdef') === 6);
console.log(calc('ifkhchlhfd') === 6);
console.log(calc('aaaaaddddr') === 30);
console.log(calc('jfmgklf8hglbe') === 6);
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') === 96);