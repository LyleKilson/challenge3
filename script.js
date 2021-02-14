// Static Variables
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var numberChar = "123456789";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Arrays
var specialCharArr = specialChar.split("");
var numberCharArr = numberChar.split("");
var lowercaseCharArr = lowercaseChar.split("");
var uppercaseCharArr = uppercaseChar.split("");

var generateBtn = document.querySelector("#generate");

Function generatePassword() {
  var passwordLength = prompt ("Your password may be between 8 and 128 characters. How many characters would you like your password to consist of?");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid entry. Please click the 'Generate Password' button to try again.");
  }
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
