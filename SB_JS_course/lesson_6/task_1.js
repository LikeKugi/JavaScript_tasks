// Напишите функцию, фильтрующую массив объектов по значению свойства.
// Массив, название свойства и нужное значение должны передаваться в качестве аргументов.


let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

function filterObject(arr, propName, propValue) {
    const propNamePattern = new RegExp(propName, 'i');
    const propValuePattern = new RegExp(propValue, 'i');

    const out = [];

    for (const element of arr) {
        for (let key in element) {
            if (propNamePattern.test(key) && propValuePattern.test(element[key])) {
                out.push({...element});
                break;
            }
        }
    }
    return out;
}

console.log(filterObject(objects, 'name', 'Иван'));