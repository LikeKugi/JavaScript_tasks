// В переменных name, surname написаны имя и фамилия человека.
// При этом в строках беспорядок с большими и маленькими буквами, и нужно привести строки в порядок.
// Для этого первые буквы имени и фамилии приведите к верхнему регистру, а оставшиеся буквы — к нижнему.
// Запишите результат в новые переменные и выведите их значения с помощью console.log.
// С помощью тернарных операторов и console.log выведите сообщение
//      - «Имя было преобразовано»
// или
//      - «Имя осталось без изменений»
// для имени и фамилии в зависимости от того, были ли исходные строки равны преобразованным.
//

const capitalizeStr = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

const validateName = (name, lastname) => {
    return [capitalizeStr(name), capitalizeStr(lastname)];
}

let testCase = [
    ['John', 'Doe'],
    ['jOhN', 'Doe'],
    ['John', 'dOe'],
    ['john', 'doe']
]

for (let [n, m] of testCase) {
    let [validName, validLastname] = validateName(n, m);
    console.log(n, validName, m, validLastname);
    console.log(n === validName ? 'Name was not changed' : 'Name was changed');
    console.log(m === validLastname ? 'Lastname was not changed' : 'Lastname was changed');
    console.log()
}