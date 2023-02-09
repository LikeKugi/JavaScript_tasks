/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
class Car{
    _carBrand;
    _price;
    _isAvailableForSale;
    constructor(carBrand, price, isAvailableForSale) {
        this._carBrand = carBrand;
        this._price = price;
        this._isAvailableForSale = isAvailableForSale;
    }
    get carBrand() {
        return this._carBrand;
    }
    get price() {
        return this._price;
    }
    get isAvailableForSale() {
        return this._isAvailableForSale;
    }
}

const cars = []
cars.push(new Car('bmw', 15000, true));
cars.push(new Car('mercedes', 17000, false));
cars.push(new Car('opel', 12000, true));

cars.push(new Car('audi', 14500, true));

console.log(cars);