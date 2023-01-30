// Переведите текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

const camelize = (str) => {
    const chars = [];
    let capFlag = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-') {
            capFlag = true;
            continue;
        }
        if (capFlag) {
            chars.push(str[i].toUpperCase());
            capFlag = false;
        } else {
            chars.push(str[i]);
        }
    }
    console.log(chars.join(''));
}

camelize("background-color"); // == 'backgroundColor';
camelize("list-style-image"); // == 'listStyleImage';
camelize("-webkit-transition"); // == 'WebkitTransition';