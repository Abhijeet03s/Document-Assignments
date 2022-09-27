let inputString = document.querySelector(".input")
let submitBtn = document.querySelector(".btn")
let finalResult = document.querySelector(".result")

submitBtn.addEventListener("click", checkPalindrome)

function checkPalindrome() {
    let string = inputString.value.split('');
    let revString = string.reverse();
    let finalRevString = revString.join('');
    if (inputString.value === finalRevString) {
        alert("It is a palindrome");
    }
    else {
        alert("Not a palindrome");
    }
}
