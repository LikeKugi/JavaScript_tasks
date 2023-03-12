function recycle(array) {
    const bins = {
        paper: 0,
        glass: 1,
        organic: 2,
        plastic: 3,
    }
    let outBins = [...Array(4)].map(el => []);
    array.forEach(el => {
        outBins[bins[el.material]].push(el.type);
        el.secondMaterial && outBins[bins[el.secondMaterial]].push(el.type);
    })
    return outBins;
}

let a = [
    {type: 'rotten apples', material: 'organic'},
    {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
    {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
    {type: 'amazon box', material: 'paper'},
    {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
];
console.log(recycle(a));
let b = [
    ['wine bottle', 'amazon box', 'beer bottle'],
    ['wine bottle', 'beer bottle'],
    ['rotten apples', 'out of date yogurt'],
    ['out of date yogurt']
];
