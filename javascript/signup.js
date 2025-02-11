
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);


let fullName = id("fullname"),
  email = id("email"),
  password = id("password"),
  confirmPassword = id("confirm-password"),
  form = id("signup-form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  let validFullName = engine(fullName, 0, "Full Name cannot be blank");
  let validEmail = emailValidation(email, 1, "Enter a valid email");
  let validPassword = passwordValidation(password, 2, "Password must be at least 8 characters");
  let validConfirmPassword = checkPasswordMatch(password, confirmPassword, 3, "Passwords do not match");

 
  if (validFullName && validEmail && validPassword && validConfirmPassword) {
    alert("Signup successful!");
    form.submit(); 
  }
});


let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    showError(id, serial, message);
    return false;
  } else {
    showSuccess(id, serial);
    return true;
  }
};

let emailValidation = (id, serial, message) => {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(id.value.trim())) {
    showError(id, serial, message);
    return false;
  } else {
    showSuccess(id, serial);
    return true;
  }
};


let passwordValidation = (id, serial, message) => {
  if (id.value.length < 8) {
    showError(id, serial, message);
    return false;
  } else {
    showSuccess(id, serial);
    return true;
  }
};


let checkPasswordMatch = (password, confirmPassword, serial, message) => {
  if (password.value !== confirmPassword.value || confirmPassword.value.trim() === "") {
    showError(confirmPassword, serial, message);
    return false;
  } else {
    showSuccess(confirmPassword, serial);
    return true;
  }
};

let showError = (id, serial, message) => {
  errorMsg[serial].innerHTML = message;
  id.style.border = "2px solid red";
  failureIcon[serial].style.opacity = "1";
  successIcon[serial].style.opacity = "0";
};


let showSuccess = (id, serial) => {
  errorMsg[serial].innerHTML = "";
  id.style.border = "2px solid green";
  failureIcon[serial].style.opacity = "0";
  successIcon[serial].style.opacity = "1";
};
