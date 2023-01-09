function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = -5; i < 500; i++) {
    console.log(i, isPrime(i));
}