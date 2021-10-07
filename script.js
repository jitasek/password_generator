// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function userInputNumbers () {
  var nums = "0123456789";
  numLength = nums.length;
  var userChoiceNumbers = confirm("Do you want to include numbers?");
  if (userChoiceNumbers === true) {
    randomNumber = nums.charAt(Math.floor(Math.random() * numLength));
    return randomNumber;
  } else if (userChoiceNumbers === false) {
    return;
  } else {
    var shouldContinue = confirm(
      "Please enter a valid choice. Press OK to continue, Cancel to exit!"
    );
    if (shouldContinue === false) {
      return;
    }
  }
}
//console.log(userInputNumbers(1));

function userInputLowLetters () {
  var lowLetters = "abcdefghijklmnopqrstuvwxyz";
  lowLength = lowLetters.length;
  var userChoiceLowLetters = confirm ("Do you want to include lowercase letters? yes/no");
  if (userChoiceLowLetters === true) {
    randomLowLetter = lowLetters.charAt(Math.floor(Math.random() * lowLength));
    return randomLowLetter;
  } else if (userChoiceLowLetters === false) {
    return;
  } else {
    var shouldContinue = confirm(
      "Please enter a valid choice. Press OK to continue, Cancel to exit!"
    );
    if (shouldContinue === false) {
      return;
    }
  }
}
//console.log(userInputLowLetters(1));

function userInputUpLetters () {
  var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  upLength = upLetters.length;
  var userChoiceUpLetters = confirm("Do you want to include uppercase letters? yes/no");
  if (userChoiceUpLetters === true) {
    randomUpLetter = upLetters.charAt(Math.floor(Math.random() * upLength));
    return randomUpLetter;
  } else if (userChoiceUpLetters === false) {
    return;
  } else {
    var shouldContinue = confirm(
      "Please enter a valid choice. Press OK to continue, Cancel to exit!"
    );
    if (shouldContinue === false) {
      return;
    }
  }
}
//console.log(userInputUpLetters(1));

function userInputSpecials () {
  var specials = "!@#$%^&*()";
  specLength = specials.length;
  var userChoiceSpecials = confirm("Do you want to include special characters? yes/no");
  if (userChoiceSpecials === true) {
    randomSpecial = specials.charAt(Math.floor(Math.random() * specLength));
    return randomSpecial;
  } else if (userChoiceSpecials === false) {
    return;
  } else {
    var shouldContinue = confirm(
      "Please enter a valid choice. Press OK to continue, Cancel to exit!"
    );
    if (shouldContinue === false) {
      return;
    }
  }
}
//console.log(userInputSpecials(1));

// function generatePassword() {
// }

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// // Assignment Code - OLD CODE, PLEASE IGNORE:
// var generateBtn = document.querySelector("#generate");

// // Generate a password - a random string of chars
// function generatePassword() {
//   var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var passwordLength = 8;
//   var generatedPassword = "";
//   var charLength = chars.length;

//   for(var i = 0; i <= passwordLength; i++){
//     generatedPassword += chars.charAt(Math.floor(Math.random() * charLength));
//   }
//   return generatedPassword;
// }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   document.getElementById("generate").value = password;
//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
