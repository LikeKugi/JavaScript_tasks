// Напишите стрелочную функцию t19, которая принимает строку и аргумент true или false.
// Если второй аргумент false - то возвращает строку. Если true - возвращает перевернутую строку.

const t19 = (str, arg) => arg ? str.split('').reverse().join('') : str;


console.log(t19('hello', true));
console.log(t19('hello', false));
