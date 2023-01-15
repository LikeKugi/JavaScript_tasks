// В этом задании в нашу функцию testRegExp первым параметром передается случайная строка(переменная s),
// а вторым - случайная подстрока(переменная sub_s), которую нужно использовать
// в качестве шаблона регулярного выражения. Вам нужно вернуть из функции строку,
// в которой будут перечислены через запятую все совпадения шаблона с первой строкой.

function testRegExp(s, sub_s) {
    const pattern = new RegExp(sub_s, 'g');
    const indexes = s.match(pattern);

    console.log(indexes);
    return indexes.join(',');
}

const t1 = 'Andsirdaarrevarariarewbutovearrmararan';
const t1_sub = 'ar';

const t2 = 'Extremitiyasiifbrieakfaistagreement';
const t2_sub = 'i';

console.log(testRegExp(t1, t1_sub));

console.log(testRegExp(t2, t2_sub));