function reverse(line) {
    outLine = [];
    n = line.length;
    for (let i = 0; i <= n; i++) {
        outLine.push(line[n-i]);
    }
    console.log(outLine.join(''));
}
reverse('cat');
reverse('hello, world!')