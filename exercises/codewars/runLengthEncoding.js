// Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays)
// [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character
// sx ix times and concatenating all those strings.
// Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

var runLengthEncoding = function(str){
    let out = [];
    str.split('').forEach((char, i) => {
        if (char === str[i-1]) {
            out[out.length-1][0] += 1;
        } else {
            out.push([1, char]);
        }
    })

    return out // << fix this
}

console.log(runLengthEncoding(""), []);
console.log(runLengthEncoding("abc"), [[1,'a'],[1,'b'],[1,'c']]);
console.log(runLengthEncoding("aab"), [[2,'a'],[1,'b']]);
console.log(runLengthEncoding("hello world!"),
    [[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]);
console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"),
    [[34,'a'], [3,'b']]);
console.log(
    runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"),
    [[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]
);