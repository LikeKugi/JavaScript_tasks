// Напишите стрелочную функцию t20, которая принимает объект и число. Если число есть в объекте,
// то возвращает первый встреченный ключ с таким числом. Если нет - false.

const j20 = {
    h: 4,
    j: 7,
    k: 22,
    m: 7
}

const t20 = (obj, num) => {
    for(let key in obj) {
        if (obj[key] === num) return true;
    }
    return false;
}

console.log(t20(j20, 7));
console.log(t20(j20, 71));
