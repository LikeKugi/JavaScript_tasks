function formatDuration(seconds) {
    // Complete this function
    if (seconds === 0) return 'now'
    const durations = [...Array(5)].map(el => 0);
    // console.log(durations)
    const time = {
        0: 'year',
        1: 'day',
        2: 'hour',
        3: 'minute',
        4: 'second'
    }
    durations[4] = seconds % 60;
    durations[3] = Math.floor(seconds / 60) % 60
    durations[2] = Math.floor(seconds / 3600) % 24
    durations[1] = Math.floor(seconds / (3600 * 24)) % 365
    durations[0] = Math.floor(seconds / (3600 * 24 * 365))
    // console.log(seconds)
    // console.log(durations)
    let out = [];
    for (let i = 0; i < 5; i++) {
        if (durations[i] === 0) continue
        let timeDescription = (durations[i] === 1) ? `${durations[i]} ${time[i]}` : `${durations[i]} ${time[i] + 's'}`;
        out.push(timeDescription);
    }
    console.log(out)
    if (out.length < 3) return out.join(' and ')


    console.log(out.slice(0, out.length-1).join(', ') + ' and ' + out[out.length-1]);
    return out.slice(0, out.length-1).join(', ') + ' and ' + out[out.length-1]
}

console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");

console.log(formatDuration(15731080), "1 second");

console.log(formatDuration(9911005), "1 second");

console.log(formatDuration(132030240), "4 years, 68 days, 3 hours and 4 minut…");
console.log(formatDuration(4590024), "53 days, 3 hours and 24 seconds");