
function determineTime (durations) {
  //have fun with coding ^.^
  if (!durations.length) return true;
  return durations.reduce((a, t) => Date.parse(`1970-01-01T${t}Z`) + a, Date.parse('1970-01-01T00:00:00Z')) <= Date.parse('1970-01-02T00:00:00Z')
}

console.log(determineTime(["00:30:00", "02:30:00", "00:15:00"], true))
console.log(determineTime([], true))
console.log(determineTime(["04:30:00", "02:00:00", "01:30:00", "16:00:00"], true))
console.log(determineTime(["12:00:00", "12:00:00"], true))
console.log(determineTime(["12:00:00", "12:00:01"], false))
console.log(determineTime(["06:00:00","12:00:00","06:30:00"], false))
