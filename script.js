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

// Main
function generatePassword() {
  //Input list for Variable Arrays
  var passwordlist = [];

  // Write password to the #password input
  var passwordLength = prompt("Your password may be between 8 and 128 characters. How many characters would you like your password to consist of?");
    if (
      passwordLength < 8 ||
      passwordLength > 128 ||
      passwordLength === null ||
      passwordLength === ""
    ) {
      window.alert(
        "Invalid entry. Please click the 'Generate Password' button and try again."
      );
      return;

    } else {
      console.log(passwordLength);
      if (confirm("Would you like special characters included in your password?\n(e.g !@#$%^&*()_-+={}[];:'`~<,>.?/|)"));
    
    }
}

  
