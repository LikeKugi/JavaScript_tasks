const isEmpty = (obj) => {
    return !!Object.keys(obj).length;
}

let testObj = {}

console.log(isEmpty(testObj));

testObj.testProp = 'test value';
console.log(isEmpty(testObj));