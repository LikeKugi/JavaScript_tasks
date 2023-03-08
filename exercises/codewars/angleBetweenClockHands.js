function handAngle (date) {
    const minuteAngle = date.getMinutes() * 6;
    const hourAngle = (date.getHours() * 30) + (date.getMinutes() * 0.5);
    const angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle) * Math.PI / 180;
}

function makeDate (hours, minutes) {
    const date = new Date();
    date.setMinutes(minutes);
    date.setHours(hours);
    return date;
}

console.log(handAngle(makeDate(0, 0)), 0.0);
console.log(handAngle(makeDate(12, 0)), 0.0);
console.log(handAngle(makeDate(6, 0)), 3.141592653589793);
console.log(handAngle(makeDate(1, 0)), 0.5235987755982988);
console.log(handAngle(makeDate(9, 0)), 1.5707963267948966);
console.log(handAngle(makeDate(10, 0)), 1.0471975511965976);
console.log(handAngle(makeDate(0, 15)), 1.4398966328953218);
console.log(handAngle(makeDate(0, 45)), 1.9634954084936207);
console.log(handAngle(makeDate(12, 30)), 2.8797932657906435);
console.log(handAngle(makeDate(7, 15)), 2.2252947962927703);
console.log(handAngle(makeDate(6, 5)), 2.6616271092913526);