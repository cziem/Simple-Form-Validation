var email = document.getElementById('email1');
var submit = document.getElementById('submit');
submit.onclick = validateEmail; // attach event to the button
var emailExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var userName = document.myForm.username;
userName.onblur = validateName; // attach event to the field
var errorMsg = 'Invalid Username';

function validateEmail() {
  if (emailExp.test(email.value)) {
    alert('correct');
  } else {
    alert('Invalid');
  }
}

function validateName() {
  var allLetters = /^[a-zA-Z]+$/;
  if (userName.value.match(allLetters)) {
    return true;
  } else {
    alert('username must have alphabets only!');
    userName.focus();
    return false;
  }
}
