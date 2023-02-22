// В кафе мороженое продают по три шарика и по пять шариков. Можно ли купить ровно k шариков мороженого?

// const k = +prompt();

const getIcecream = (k) => {
    for (let i = 1; i < k; i++) {
        console.log(k, k%(i*3), (k-(i*3))%5);
        if(!(k % (i * 3)) || !((k - (i * 3)) % 5) || !(k % (i * 5))) {
            return true;
        }
    }
    return false;
}

for (let k of [1, 3, 2, 47, 15, 23]) {
    console.log(getIcecream(k));
}