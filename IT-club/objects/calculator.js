// Создайте объект calculator (калькулятор) с тремя методами:
//
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
    x: 0,
    y: 0,

    sum: () => this.x + this.y,
    mul: () => this.x * this.y,
    read: () => {
        this.x = Math.ceil(Math.random() * 15);
        this.y = Math.floor(Math.random() * 17);

        console.log(`x = ${this.x}; y = ${this.y}`);
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());