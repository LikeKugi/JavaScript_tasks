function squares(x, n) {
    if(n <= 0) return [];
    let out = [x];
    for (let i = 1; i < n; i++) {
        out.push(out[out.length - 1] ** 2)
    }
    return out
}

console.log(squares(2,0), []);
console.log(squares(2,-5), []);