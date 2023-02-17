// Напишите функцию, t15, которая в зависимости от четности аргумента num запускает функцию even, или odd.

function t15(num, even, odd) {
    if (num % 2) {
        odd();
    } else {
        even();
    }
}

function showOne() {
    console.log('even');
}

function showTwo() {
    console.log('odd');
}



t15(5, showOne, showTwo);
t15(6, showOne, showTwo);
