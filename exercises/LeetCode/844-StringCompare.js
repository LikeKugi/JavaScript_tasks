/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let sStack = [];
    let tStack = [];
    for (const sElement of s) {
        sElement === '#' ? sStack.pop() : sStack.push(sElement);
    }
    for (const tElement of t) {
        tElement === '#' ? tStack.pop() : tStack.push(tElement);
    }
    console.log(sStack.join(''), tStack.join(''))
    return sStack.join('') === tStack.join('')
};

// let s = prompt()
// let t = prompt()
console.log(backspaceCompare('ab#c', 'ad#c'))