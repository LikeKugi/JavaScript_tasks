class User {
    #userName;
    #userPassword;

    constructor(login, password) {
        this.login = login;
        this.#password = password;
    }
    get login(){
        return this.#userName;
    }
    set login(value) {
        if (this.#userName) return false;
        this.#userName = value
    }
    get password() {
        return this.#userPassword;
    }
    set #password(value) {
        this.#userPassword = this.reverseWord(value);
    }

    checkPassword(value) {
        return this.password === this.reverseWord(value);
    }
    changePassword(oldPassword, newPassword) {
        if (this.password !== this.reverseWord(oldPassword)) return false;
        this.#password = newPassword;
    }
    reverseWord(word) {
        return word.split('').reverse().join('')
    }
}

const user1 = new User('admin', 'qwerty');

console.log(user1);
console.log(user1.password);
user1.password = 'ytrewq';
console.log(user1.password);

console.log(user1.login);
user1.login = 'the best admin';
console.log(user1.login);

console.log(user1.checkPassword('ytrewq'));
user1.changePassword('qwerty', 'ytrewq');
console.log(user1.checkPassword('ytrewq'));