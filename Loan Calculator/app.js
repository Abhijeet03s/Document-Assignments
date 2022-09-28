// EMI Formula:
// EMI = [P x R x (1+R) ^N]/ [(1+R) ^ (N-1)]

let emi = document.querySelector(".emi")
let interestPay = document.querySelector(".pay-interest")
let total = document.querySelector(".total")
let principalAmount = document.querySelector(".principal")
let interestRate = document.querySelector(".rate")
let loanTenure = document.querySelector(".tenure")
let submitBtn = document.querySelector(".btn")

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let principal = parseFloat(principalAmount.value);
    let rate = parseFloat(interestRate.value) / 12 / 100;
    let tenure = parseFloat(loanTenure.value) * 12;
    let q = ((rate + 1) ** tenure);
    let finalEMI = principal * rate * (q / (q - 1));
    emi.innerText = Math.round(finalEMI);
    interestPay.innerText = Math.round((finalEMI * tenure) - principal);
    total.innerText = Math.round(finalEMI * tenure);
})
