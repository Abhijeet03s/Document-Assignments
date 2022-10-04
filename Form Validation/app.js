let fullNameError = document.getElementById("fname-error");
let emailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");
let confirmPasswordError = document.getElementById("confirm-password-error");
let submitError = document.getElementById("submit-error");

function validateFname() {
  let name = document.getElementById("fname").value;
  // console.log(name);

  if (name.length === 0) {
    fullNameError.innerHTML = "Full Name required";
    return false
  }
  if (!name.match(/^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/)) {
    fullNameError.innerHTML = "Enter a valid Full Name";
  }
  fullNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}


function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "E-mail is required";
    return false;
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
    emailError.innerHTML = "Enter a valid E-mail";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}


function validatePass() {
  let password = document.getElementById("pass").value;

  if (password.length == 0) {
    passwordError.innerHTML = "Field cannot be empty here";
    return false;
  }
  if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
    passwordError.innerHTML = "Password is Required";
    return false;
  }
  passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}


function confirmPass() {
  let pass1 = document.getElementById("pass").value;
  let pass2 = document.getElementById("confirm-pass").value;
  if (pass1.length != 0) {
    if (pass1 != pass2) {
      confirmPasswordError.innerHTML = 'Password dont match';
      return false;
    } else {
      confirmPasswordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
      return true
    }
  }
}

function validateSubmit() {
  if (!validateFname() || !validateEmail() || !validatePass() || !confirmPass()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fill the empty field";
    return false;
  }
  else {
    alert("Successfully Signed Up")
  }
}
