//Button click
var generateBtn = document.querySelector("#generate");
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

//Input list for Variable Arrays
var passwordlist = [];

// Write password to the #password input
var lengthInput = function() {
  passwordLength = prompt("Your password may be between <strong>8 and 128</strong> characters. How many characters would you like your password to consist of?");
  if (passwordLength === null || passwordLength === "") {
    return;
    
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid entry. Please click the 'Generate Password' button and try again.");
    return;

  } else {
    console.log(passwordLength);
    passwordCriteria ();
    }
}

var passwordCriteria = function() {
   if (confirm("Would you like special characters included in your password (e.g !@#$%^&*()_-+={}[];:'`~<,>.?/|)?")) {
    passwordlist = passwordlist + specialCharArr;
    console.log(passwordlist);
   } 
} 





generateBtn.addEventListener("click", lengthInput);


  
//var password = generatePassword();

//var passwordText = document.querySelector("#password");

 // passwordText.value = password;
