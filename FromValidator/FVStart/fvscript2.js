const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// email validation
function checkEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, "Wrong email format");
  }
}
// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (item) {
    if (item.value.trim() === "") {
      // console.log(item.id);
      showError(item, `${getFieldName(item)} is Required`);
    } else {
      showSuccess(item);
    }

    // console.log(item.value);
  });
}

// get input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less then ${max} Characters`
    );
  } else {
    showSuccess(input);
  }
}
//password confirmation
function confirmPassword(p1, p2) {
  if (p1.value !== p2.value) {
    showError(p2, "Password did not match");
  }
}

//get feild name
function getFieldName(item) {
  return item.id.charAt(0).toUpperCase() + item.id.slice(1);
}

//Event Listners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  confirmPassword(password, password2);

  if (username.value === "") {
    showError(username, "username is required");
  } else {
    showSuccess(username);
  }
});
