// Напишите функцию замыкание generatePassword2, которая принимает два аргумента - массив символов (arr),
// и длину пароля(n). Функция содержит в себе две функции. Первая функция randomInteger(min, max) ,
// а вторую функцию возвращает (делает return).
// Данная функция, которую возвращают должна возвращать строку длинной n из символов массива arr.
// Символы выбираются случайным образом.


function generatePassword2(arr, n) {
    const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    return () => {
        let out = [];
        for (let i = 0; i < n; i++) {
            out.push(arr[randomInteger(0, arr.length - 1)])
        }
        return out.join('');
    }
}

let password2 = generatePassword2(['b', 'y', 'Y', 'b', 'z'], 10);
console.log(password2());