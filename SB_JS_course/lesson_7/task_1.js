const inputEL = document.querySelector('#timer');
const displayEl = document.querySelector('#display');

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

stopBtn.addEventListener('click', stopTimer)

let timerID = 0;

startBtn.addEventListener('click', () => {
    if (timerID) stopTimer();
    displayEl.textContent = +inputEL.value
    timerID = setInterval(()=>{
        render();
    },1000);
})

function render() {
    +displayEl.textContent > 0 ? displayEl.textContent -= '1' : displayEl.textContent = '0';
    if (!+displayEl.textContent) stopTimer();
}

function stopTimer() {
    displayEl.textContent = '0';
    clearInterval(timerID);
}