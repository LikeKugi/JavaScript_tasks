const randomUniform = (mi=0, ma=1) => {
    return Math.random() * (ma - mi);
}

const randomInteger = (mi=0, ma=1) => {
    return Math.floor(randomUniform(mi, ma));
}

for (let i = 0; i < 50; i++) {
    console.log(`RU: min: ${i}; max: ${10*i+32}; result: ${randomUniform(i, 10*i+32)}`)
    console.log(`RI: min: ${i}; max: ${10*i+32}; result: ${randomInteger(i, 10*i+32)}`)
    console.log();
}

