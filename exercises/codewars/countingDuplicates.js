function duplicateCount(text){
  if (!text) return 0;
  const duplicates = new Map();
  [...text].forEach(char => duplicates.has(char.toLowerCase()) ? duplicates.set(char.toLowerCase(), duplicates.get(char.toLowerCase()) + 1) : duplicates.set(char.toLowerCase(), 1));
  console.log([...duplicates], [...duplicates].reduce((a, arr) => arr[1] > 1 ? a + 1 : a, 0 ))
  return [...duplicates].reduce((a, arr) => arr[1] > 1 ? a + 1 : a, 0 )
}


// console.log(duplicateCount(""), 0);
// console.log(duplicateCount("abcde"), 0);
// console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
// console.log(duplicateCount("Indivisibility"), 1)
// console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
