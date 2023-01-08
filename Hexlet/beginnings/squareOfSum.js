function squareOfSum(a, b) {
    return (a**2 + 2*a*b + b**2);
}

squareOfSumLambda = (a,b) => (a**2 + 2*a*b + b**2);

console.log(squareOfSum(2, 3));

console.log(squareOfSumLambda(1, 10));

const isEven = num => num % 2 === 0;
// функция увеличивает полученное число num на 10
const increaseNum = num => num + 10;

const num = 6;
const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;
console.log(result)