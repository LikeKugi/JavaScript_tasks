const tested = new Test();
tested.testProp = "qwerty";
console.log(tested.testProp);

const test2 = new Test2();
console.log((test2.testProp = "bbb"));
console.log(test2);

console.log((test2.testProp = ""));
console.log(test2);

console.log(test2.setTestProp(""));
console.log(test2);

console.log(test2.testProp);

console.log("/-------------------------/");

const test3 = new Test3();
console.log((test3.testProp = "test3"));
console.log(test3);

const test4 = new Test4();
console.log((test4.testProp = "12"));
console.log(test4);

const test5 = new Test4();
console.log((test5.testProp = "5"));
console.log(test5.testProp);
