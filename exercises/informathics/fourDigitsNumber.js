// Дано четырехзначное число. Определите, является ли его десятичная запись симметричной. Если число симметричное, то выведите 1, иначе выведите любое другое целое число. Число может иметь меньше четырех знаков, тогда нужно считать, что его десятичная запись дополняется слева незначащими нулями.
//
//     При решении этой задачи нельзя пользоваться условной инструкцией if и циклами

for (let i = 2110; i < 2115; i++) {
    let digits = Array.from(String(i));
    console.log(digits)

    console.log(+!!(digits[0]==digits[3] && digits[1] == digits[2]));
}

