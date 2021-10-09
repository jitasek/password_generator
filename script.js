// Assignment Code
var generateBtn = document.querySelector("#generate");

// Initiations
var nums = "0123456789";
var lowLetters = "abcdefghijklmnopqrstuvwxyz";
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specials = "!@#$%^&*()";

var InputNumber;
var InputLowLetter;
var InputUpLetter;
var InputSpecial;
var userChoice = "";
var guaranteedChoices = [];
var resultArray = [];

// Generate random characters

function getRandomNumber() {
  var randomNumber = nums.charAt(Math.floor(Math.random() * nums.length));
  return randomNumber;
}

function getRandomLowLetter() {
  var randomLowLetter = lowLetters.charAt(
    Math.floor(Math.random() * lowLetters.length)
  );
  return randomLowLetter;
}

function getRandomUpLetter() {
  var randomUpLetter = upLetters.charAt(
    Math.floor(Math.random() * upLetters.length)
  );
  return randomUpLetter;
}

function getRandomSpecial() {
  var randomSpecial = specials.charAt(
    Math.floor(Math.random() * specials.length)
  );
  return randomSpecial;
}

// Function to generate password

function generatePassword() {
  howManyChars = parseInt(
    prompt(
      "How many characters will your password have? Choose between 8 and 128"
    )
  );

  if (howManyChars === false) {
    alert("Number of characters needed.");
  }
  if (howManyChars < 8 || howManyChars > 128) {
    howManyChars = parseInt(prompt("Please choose between 8 and 128"));
  }
  //console.log(howManyChars);
  // User input - variables hold the true/false
  InputNumber = confirm("Dou you wanna include numbers?");
  InputLowLetter = confirm("Dou you wanna include lowercase letters?");
  InputUpLetter = confirm("Dou you wanna include uppercase letters?");
  InputSpecial = confirm("Dou you wanna include special characters?");

  // 4 negative choices
  if (!InputNumber && !InputLowLetter && !InputUpLetter && !InputSpecial) {
    alert("You must select some criteria.");
  }
  // 4 positive choices
  if (InputNumber) {
    userChoice = userChoice.concat(nums);
    guaranteedChoices.push(getRandomNumber());
  }
  if (InputLowLetter) {
    userChoice = userChoice.concat(lowLetters);
    guaranteedChoices.push(getRandomLowLetter());
  }
  if (InputUpLetter) {
    userChoice = userChoice.concat(upLetters);
    guaranteedChoices.push(getRandomUpLetter());
  }
  if (InputSpecial) {
    userChoice = userChoice.concat(specials);
    guaranteedChoices.push(getRandomSpecial());
  }
  //console.log(userChoice);
  //console.log(guaranteedChoices);

  for (var i = 0; i < howManyChars; i++) {
    var index = Math.floor(Math.random() * userChoice.length);
    resultArray.push(userChoice[index]);
    //console.log(index);
    //console.log(userChoice[index]);
  }
  //console.log(resultArray);
  for (var j = 0; j < guaranteedChoices.length; j++) {
    resultArray[j] = guaranteedChoices[j];
  }
  console.log(resultArray);
  return resultArray.join("");
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  console.log(password);
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
