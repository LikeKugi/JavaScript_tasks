/*
* var newArr = this.slice();
* this.forEach((v, i, arr) => newArr[i] = callback.apply(context, [v, i, arr]));
* return newArr;
* */

/* You code goes here */
Array.prototype.map = function(callback, context) {
    const newArr = new Array(this.length)
    for (let i = 0; i < this.length; i++) {
        if (i in this) newArr[i] = callback.call(context,this[i], i, this)
    }
    return newArr
};

var sum_with_context = [1, 2, 3].map(function(item, index) { return item + this[index]; }, [4, 5, 6]);
console.log(sum_with_context, [5, 7, 9], "Oh no! It looks like 'this' was not the context.");