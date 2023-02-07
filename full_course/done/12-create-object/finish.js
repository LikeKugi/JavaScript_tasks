/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

class MyPersonal {
    _surname;
    _favoriteNumber;
    _name;
    constructor(name, surname, favoriteNumber) {
        this._name = name;
        this._surname = surname;
        this._favoriteNumber = favoriteNumber;
    }
    print() {
        console.log(`My name is ${this._name} ${this._surname} and my favorite number is ${this._favoriteNumber}`);
    }
}

const me = new MyPersonal('Ilya', 'Kugi', 69);
me.print();