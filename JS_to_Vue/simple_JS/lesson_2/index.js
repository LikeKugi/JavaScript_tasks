// inline comment

/**
 * JSDoc comment
 */

/*
    several lines comment
 */

console.log('data types in JS');
console.log('\nPrimitives');
console.log('Number:', 1, 2023, 1.5, NaN, Infinity);
console.log('String: "Hello", \'Hello\', `Hello`');
console.log('Boolean:', true, false);
console.log('Null:', null);
console.log('Undefined:', undefined);
console.log('Symbol ES6:', Symbol('y'));
console.log('\nReferences: (Object)');
console.log('Object:', Object);
console.log('Function:', function (){});
console.log('Array:', [...Array(5)].map((el, i) => i) );
console.log('Date:', new Intl.DateTimeFormat('ru-RU').format(Date.now()));
console.log('RegExp:', new RegExp('hello', 'gi'));