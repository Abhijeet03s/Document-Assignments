let timerValue = document.querySelector(".input")
let submitBtn = document.querySelector(".btn")
let countdownTime = document.querySelector(".timer")

submitBtn.addEventListener("click", () => {
    let countdown = timerValue.value;
    // console.log(countdown);
    if (countdown < 0 || countdown == 0) {
        return alert("Enter a positive number")
    }
    else {
        setInterval(() => {
            countdownTime.innerHTML = countdown;
            countdown--;
        }, 1000);
    }
});