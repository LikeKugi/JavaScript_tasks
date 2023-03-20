"use strict"

const details = {
    message: 'Hello',
}
function getMessage() {
    return this.message;
}

console.log(getMessage.call(details))

for (var i = 0; i < 10; i++) {

}
console.log(i)

var name = 'john';

var user = {
    name: 'peter',
    pm() {
        console.log('hello ' + this.name)
    }
}
var printM = user.pm
printM()

const foo = bar();
const nm = 2;
function bar() {return nm;}

function foo(a, b) {
    return a * b;
}
const bar = foo.bind(null, 2)
console.log(bar(2))

let name = 'john';
function pn() {
    console.log(name);
}
setTimeout(() => {
    let name = 'pete';
    pn();
}, 500);