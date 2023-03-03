const truncate = (text, len) => {
    // BEGIN (write your solution here)
    if (text.length < len) return text;
    return text.slice(0, len) + '...'
    // END
};

console.log(truncate('текст', 3))
console.log(truncate('и пошла вода', 5))