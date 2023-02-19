// Напишите стрелочную функцию, которая проверяет что пользователь ввел. Если число - возвращает true,
// если строку - false.

const t15 = inp => typeof inp === 'number';


let num = 15;
console.log(t15(num));
num = '15';
console.log(t15(num));

