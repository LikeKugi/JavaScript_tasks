// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.
//
//     Passwords must abide by the following requirements:
//
//     More than 3 characters but less than 20.
//
// Must contain only alphanumeric characters.
//
//     Must contain letters and numbers.

function validPass(password){
    if (password.length <= 3 || password.length >= 20) return 'INVALID';
    let charsPattern = /[a-z]/i;
    return charsPattern.test(password) && /\d/.test(password) && !/[.,\/#!$%\^&\*;:{}=\-_`~()]/.test(password) ? 'VALID' : 'INVALID';
}

console.log( validPass('Username123') , 'VALID' );
console.log( validPass('Username') , 'INVALID' );
console.log( validPass('1Username') , 'VALID' );
console.log( validPass('123') , 'INVALID' );
console.log( validPass('a12') , 'INVALID' );
console.log( validPass('1234') , 'INVALID' );
console.log( validPass('a123') , 'VALID' );
console.log( validPass('Username123!') , 'INVALID' );
console.log( validPass('passw0rdIsntTooLong') , 'VALID' )
console.log( validPass('passw0rd1CharTooLong') , 'INVALID' )