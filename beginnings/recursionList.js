function my_function(n) {
    // Тут нужно написать решение
    if (n < 1) {
        return;
    }
    if (n === 1) {
        return n
    }
    return `${my_function(n-1)} ${n}`;
}

for (let i = 0; i < 100; i++) {
    console.log(my_function(i))
}
