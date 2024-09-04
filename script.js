let startTime, elapsedTime = 0, timerInterval;
const timeDisplay = document.getElementById('timeDisplay');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timeDisplay.textContent = formatTime(elapsedTime);
    }, 10);
    startStopBtn.textContent = 'Pause';
}

function pauseTimer() {
    clearInterval(timerInterval);
    startStopBtn.textContent = 'Start';
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timeDisplay.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    laps.innerHTML = '';
}

function recordLap() {
    const lapTime = document.createElement('p');
    lapTime.textContent = formatTime(elapsedTime);
    laps.appendChild(lapTime);
}

function formatTime(ms) {
    const time = new Date(ms);
    const minutes = time.getUTCMinutes().toString().padStart(2, '0');
    const seconds = time.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = Math.floor(time.getUTCMilliseconds() / 10).toString().padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}

startStopBtn.addEventListener('click', () => {
    if (startStopBtn.textContent === 'Start') {
        startTimer();
    } else {
        pauseTimer();
    }
});

resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);
