// Напишите рекурсивную функцию t9, которая создает массив ar9_res состоящий из возраста (age)
// пользователей прописанных в ar9.

let ar9 = {
    "ivanov": {
        age: 25,
        parent: {
            "ivanov-a": {
                age: 45
            },
            "ivanov-b": {
                age: 43,
                parent: {
                    "sergeev-a": {
                        age: 88,
                        parent: {
                            "lionenko": {}
                        }
                    },
                }
            }
        }
    },
    "kostenko": {
        age: 56,
        parent: {
            "ignatenko": {

            },
            "sniezko": {
                age: 45
            }
        }
    }
}

let ar9_res = [];

function t9(obj) {
    for (const el in obj) {
        if (el === 'age') ar9_res.push(obj[el]);
        if (typeof obj[el] === "object") t9(obj[el])
    }
}
t9(ar9)
console.log(ar9_res);