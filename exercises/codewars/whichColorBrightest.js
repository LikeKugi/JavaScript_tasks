function brightest(colors){
    let brightest = ''
    let m = colors.reduce((m, cr) => {
        let bright = Math.max(parseInt(cr.slice(1, 3), 16), parseInt(cr.slice(3, 5), 16), parseInt(cr.slice(5, 7), 16))
        // console.log(cr, bright)
        if (m <= bright) {
            m = bright;
            brightest = cr;
        }
        return m;
    }, 0)
    return (brightest)
}

console.log(brightest(["#001000", "#000000"]), "#001000");
console.log(brightest(["#ABCDEF", "#123456"]), "#ABCDEF");
console.log(brightest(["#00FF00", "#FFFF00"]), "#00FF00");
console.log(brightest(["#FFFFFF", "#1234FF"]), "#FFFFFF");
console.log(brightest(["#FFFFFF", "#123456", "#000000"]), "#FFFFFF");
console.log(brightest(["#A0C895","#C88889","#552FDD","#1F1830","#EF6066","#B84625","#ABF30B","#DD1DAF","#E9AA21","#D71333"]), '#ABF30B')