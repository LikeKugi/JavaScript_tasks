// В переменную password запишите строку с любым произвольным паролем. Проверьте надёжность пароля.
// Пароль является надёжным, когда в нём есть хотя бы четыре символа, а также есть хотя бы один из символов '-', '_'.
// Выведите в консоль сообщения «Пароль надёжный» или «Пароль недостаточно надёжный».

const validatePassword = (password) => {
    return (/[-_]/).test(password) && (password.length >= 4);
}

let testValid = [
    '1234-',
    '4321_',
    'qaz-xsw',
    '_zxd'
]

let testInvalid = ['_-a', 'qaz', '_-3', '123456789'];

for (let el of [...testValid, ...testInvalid]) {
    console.log(validatePassword(el) ? 'Password is valid' : 'Password is invalid');
}