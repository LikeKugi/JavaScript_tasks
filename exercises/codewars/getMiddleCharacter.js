
function getMiddle(s)
{
  //Code goes here!
  const pivot = Math.floor(s.length / 2)
  if (s.length % 2) return s[pivot]

  return s[pivot - 1] + s[pivot]
}

console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");
