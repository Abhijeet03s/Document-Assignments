// Build a Stopwatch app which starts by pressing the button start and stop by stop button also there is a reset button.

window.onload = function () {

    let seconds = 00;
    let mins = 00;
    let min = document.getElementById("mins")
    let sec = document.getElementById("seconds")
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
        mins = "00";
        seconds = "00";
        min.innerHTML = mins;
        sec.innerHTML = seconds;
    }

    function runTimer() {
        mins++;

        if (mins <= 9) {
            min.innerHTML = "0" + mins;
        }
        if (mins > 9) {
            min.innerHTML = mins;

        }
        if (mins > 99) {
            seconds++;
            sec.innerHTML = "0" + seconds;
            mins = 0;
            min.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            sec.innerHTML = seconds;
        }
    }
}