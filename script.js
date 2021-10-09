// Assignment Code
var generateBtn = document.querySelector("#generate");

// 4 Functions to generate the desired types of characters for the password based on user inputs
var nums = "0123456789";
var lowLetters = "abcdefghijklmnopqrstuvwxyz";
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specials = "!@#$%^&*()";

var InputNumber;
var InputLowLetter;
var InputUpLetter;
var InputSpecial;

function userInputNumbers () {
  //var nums = "0123456789";
  numLength = nums.length;
  var userChoiceNumbers = confirm("Do you want to include numbers?");
  if (userChoiceNumbers === true) {
    randomNumber = nums.charAt(Math.floor(Math.random() * numLength));
    return randomNumber;
  } else {
    return false;
  } 
}
//console.log(userInputNumbers(1));

function userInputLowLetters () {
  //var lowLetters = "abcdefghijklmnopqrstuvwxyz";
  lowLength = lowLetters.length;
  var userChoiceLowLetters = confirm ("Do you want to include lowercase letters?");
  if (userChoiceLowLetters === true) {
    randomLowLetter = lowLetters.charAt(Math.floor(Math.random() * lowLength));
    return randomLowLetter;
  } else {
    return false;
  }
}
//console.log(userInputLowLetters(1));

function userInputUpLetters () {
  //var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  upLength = upLetters.length;
  var userChoiceUpLetters = confirm("Do you want to include uppercase letters?");
  if (userChoiceUpLetters === true) {
    randomUpLetter = upLetters.charAt(Math.floor(Math.random() * upLength));
    return randomUpLetter;
  } else {
    return false;
  } 
}
//console.log(userInputUpLetters(1));

function userInputSpecials () {
  //var specials = "!@#$%^&*()";
  specLength = specials.length;
  var userChoiceSpecials = confirm("Do you want to include special characters?");
  if (userChoiceSpecials === true) {
    randomSpecial = specials.charAt(Math.floor(Math.random() * specLength));
    return randomSpecial;
  } else {
    return false;
  } 
}
//console.log(userInputSpecials(1));

// Function to generate password

function generatePassword() {
  howManyChars = parseInt(prompt("How many characters will your password have? Choose between 8 and 128"));

  if(howManyChars === false) {
    alert("Number of characters needed.");
  } else if (howManyChars < 8 || howManyChars > 128) {
    howManyChars = parseInt(prompt("Please choose between 8 and 128"));
  } else {
    InputNumber = userInputNumbers();
    InputLowLetter = userInputLowLetters();
    InputUpLetter = userInputUpLetters();
    InputSpecial = userInputSpecials();
  }

  // 4 negative choices
  if (InputNumber === false && InputLowLetter === false && InputUpLetter === false && InputSpecial ===false) {
    alert("You must select some criteria.");   // or do I need userChoice = at the beginning? 
  } 
  // 4 positive choices
  else if (InputNumber && InputLowLetter && InputUpLetter && InputSpecial) {
    userChoice = InputNumber.concat(InputLowLetter, InputUpLetter, InputSpecial);
  } 
  // 3 positive choices
  else if (InputNumber && InputLowLetter && InputUpLetter) {
    userChoice = InputNumber.concat(InputLowLetter, InputUpLetter);
  }
  else if (InputNumber && InputLowLetter && InputSpecial) {
    userChoice = InputNumber.concat(InputLowLetter, InputSpecial);
  }
  else if (InputNumber && InputUpLetter && InputSpecial) {
    userChoice = InputNumber.concat(InputUpLetter, InputSpecial);
  }
  else if (InputLowLetter && InputUpLetter && InputSpecial) {
    userChoice = InputLowLetter.concat(InputUpLetter, InputSpecial);
  }
  // 2 positive choices
  else if (InputNumber && InputLowLetter) {
    userChoice = InputNumber.concat(InputLowLetter);
  }
  else if (InputNumber && InputUpLetter) {
    userChoice = InputNumber.concat(InputUpLetter);
  }
  else if (InputNumber && InputSpecial) {
    userChoice = InputNumber.concat(InputSpecial);
  }
  else if (InputLowLetter && InputUpLetter) {
    userChoice = InputLowLetter.concat(InputUpLetter);
  }
  else if (InputLowLetter && InputSpecial) {
    userChoice = InputLowLetter.concat(InputSpecial);
  }
  else if (InputUpLetter && InputSpecial) {
    userChoice = InputUpLetter.concat(InputSpecial);
  }

  // 1 positive choice
  else if (userInputNumbers) {
    userChoice = InputNumber;
  }
  else if (userInputLowLetters) {
    userChoice = InputLowLetter;
  }
  else if (userInputUpLetters) {
    userChoice = InputUpLetter;
  }
  else if (userInputSpecials) {
    userChoice = InputSpecial;
  }

  // I need to let the functions run "howManyChars" times   ??
  var pickedChoices = ""; 
  for (var i = 0; i < howManyChars; i++) {
    pickedChoices = userChoic
  } 
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


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
