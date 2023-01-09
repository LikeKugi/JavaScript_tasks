function smallestDivisor(num) {
    if (num === 1) {
        return 1;
    }
    for (let i = 2; i <= num; i++) {
        if (num % i === 0){
            return i;
        }
    }
}

for (let i = 1; i < 50; i++) {
    console.log(smallestDivisor(i));
}