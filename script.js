// test Git
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate a password - a random substring of chars
function generatePassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;
  var generatedPassword = "";
  var charLength = chars.length;

  for(var i = 0; i <= passwordLength; i++){
    generatedPassword += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  document.getElementById("generate").value = password;
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
