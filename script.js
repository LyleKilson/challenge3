// Static Password Input Variables
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var numberChar = "123456789";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Static Input Variable Arrays
var specialCharArr = specialChar.split("");
var numberCharArr = numberChar.split("");
var lowercaseCharArr = lowercaseChar.split("");
var uppercaseCharArr = uppercaseChar.split("");

// Other Variables
var passwordLength;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength = prompt("Your password may be between 8 and 128 characters. How many characters would you like your password to consist of?");
  if (passwordLength < 8 || passwordLength > 128 || passwordLength == null || passwordLength == "") {
    alert("Invalid entry. Please click the 'Generate Password' button and try again.");
    writePassword(); 
  } else {
    console.log(passwordLength);
    return passwordLength;
  }
}


  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
