// Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

check = (age) => (age > 18) ? true : console.log('Родители разрешили?');

check(17);
