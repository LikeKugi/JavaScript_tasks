// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
    return {
        name: "Джон",
        ref: this
    };
}

let user = makeUser();

console.log( user.ref.name ); //undefined