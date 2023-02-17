// Напишите функцию, t13, которая выводит массив (переданный как аргумент arr)
// c помощью функции funcArg (переданной как аргумент).


function t13(arr, funcArg) {
    console.log(funcArg(arr));
}

// функции для вывода уже заготовлены
function showArrSpace(arr) {
    return arr.join(' ');
}

function showArrUnderscore(arr) {
    return arr.join('_');
}


t13([3, 4, 5], showArrSpace);
// попробуйте также вместо showArrSpace поставить showArrUnderscore
t13([3, 4, 5], showArrUnderscore);
