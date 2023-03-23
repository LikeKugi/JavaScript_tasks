const displayEl = document.querySelector('#display');
const inputEl = document.querySelector('#text');

let timerID = null;

function checkTimer() {
    if (timerID) {
        console.log('clear');
        clearInterval(timerID);
        displayEl.textContent = '';
    }
}

function renderText() {
    displayEl.textContent = inputEl.value;
}

function readInput() {
    checkTimer();
    timerID = setTimeout(renderText, 300)
}

inputEl.addEventListener('input',readInput);