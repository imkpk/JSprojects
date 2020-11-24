const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
// // Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// email validation
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//event listiners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    // alert('username is required')
    showError(username, "username is required");
  } else {
    showSuccess(username);
    // console.log(username.value);
  }
  // if (email.value === "") {
  //   // alert('username is required')
  //   showError(email, "email is required");
  // } else if (!validateEmail(email.value)) {
  //   showError(email, "email is not valid");
  // } else {
  //   showSuccess(email);
  //   // console.log(username.value);
  // }
  // if (password.value === "") {
  //   // alert('username is required')
  //   showError(password, "password is required");
  // } else {
  //   showSuccess(password);
  //   // console.log(username.value);
  // }
  // if (password2.value === "") {
  //   // alert('username is required')
  //   showError(password2, "Confirmation is required");
  // } else {
  //   showSuccess(password2);
  //   // console.log(username.value);
  // }
  // console.log(username.value);
});
