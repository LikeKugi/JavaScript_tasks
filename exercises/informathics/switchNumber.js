function testCase(a) {
    let x;
    // Тут нужно написать решение
    switch (a){
        case 1:
            x = 'Один';
            break;
        case 2:
            x = 'Два';
            break;
        case 3:
            x = 'Три';
            break;
        case 4:
            x = 'Четыре';
            break;
        case 5:
            x = 'Пять';
            break;
        case 6:
            x = 'Шесть';
            break;
        case 7:
            x = 'Семь';
            break;
        case 8:
            x = 'Восемь';
            break;
        case 9:
            x = 'Девять';
            break;
        case 0:
            x = 'Ноль';
            break;
    }
    return x;
}

for (let i = 0; i < 10; i++) {
    console.log(testCase(i));
}
