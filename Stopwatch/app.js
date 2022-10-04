window.onload = function () {
    let [minisecs, seconds, mins, hours] = [0, 0, 0, 0];
    let timer = document.querySelector(".timer");
    let startBtn = document.getElementById('btn-start');
    let stopBtn = document.getElementById('btn-stop');
    let resetBtn = document.getElementById('btn-reset');
    let startTimer;

    startBtn.onclick = function () {
        clearInterval(startTimer);
        startTimer = setInterval(runTimer, 10);
    }

    stopBtn.onclick = function () {
        clearInterval(startTimer);
    }


    resetBtn.onclick = function () {
        clearInterval(startTimer);
        [minisecs, seconds, mins, hours] = [0, 0, 0, 0];
        timer.textContent = "00 : 00 : 00 : 000";
    }

    function runTimer() {
        minisecs += 10;

        if (minisecs == 1000) {
            minisecs = 0;
            seconds++;
        }
        if (seconds == 60) {
            seconds = 0;
            mins++;
        }
        if (mins == 60) {
            mins = 0;
            hours++;
        }

        let h = hours < 10 ? "0" + hours : hours;
        let m = mins < 10 ? "0" + mins : mins;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = minisecs < 10 ? "00" + minisecs : minisecs < 100 ? "0" + minisecs : minisecs;
        timer.textContent = `${h} : ${m} : ${s} : ${ms}`;
    }
}