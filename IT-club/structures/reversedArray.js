// Сортировать в порядке по убыванию

const reversed = (arr) => {
    arr.sort(function (a, b){return  b-a});
}

let arr = [5, 2, 1, -10, 8];
reversed(arr)
console.log(arr)