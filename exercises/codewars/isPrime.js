
function isPrime(num) {
    if (num < 4) return num > 1;
    if (!(num % 2) || !(num % 3)) return false;

    for(let i = 5; i <= Math.sqrt(num); i+=6) {
        if((num % i === 0) || (num %  (i + 2) === 0)) {
            console.log(i)
            return false;
        }
    }

    return true;
}


console.log(isPrime(182601169));