var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("phone-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length < 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[a-zA-Z]+$/) && name.length > 0) {
    nameError.innerHTML = "Name should contain only alphabets";
    return false;
  }

  nameError.innerHTML = '<i class="fas fa-check"></i>';
  return true;
}

function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length < 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (
    !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) &&
    email.length > 0
  ) {
    emailError.innerHTML = "Invalid email";
    return false;
  }

  emailError.innerHTML = '<i class="fas fa-check"></i>';
  return true;
}

function validatePhone() {
  var phone = document.getElementById("contact-phone").value;

  if (phone.length < 0) {
    phoneError.innerHTML = "Phone is required";
    return false;
  }
  if (!phone.match(/^\d{10}$/) && phone.length > 0) {
    phoneError.innerHTML = "Invalid phone number";
    return false;
  }

  phoneError.innerHTML = '<i class="fas fa-check"></i>';
  return true;
}

function validateForm() {
  if (!validateName() || !validateEmail() || !validatePhone()) {
    submitError.innerHTML = "Please fill all the fields correctly";
    return false;
  }
}
