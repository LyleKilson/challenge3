//Button Click
var generateBtn = document.querySelector("#generate");

// Variable Strings
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var numberChar = "123456789";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Main
function generatePassword() {
  // Password Criteria Input Array
  var passwordList = [];
  // Final Password Variable
  var finalPass = "";

  // Password Length Input
  var passwordLength = prompt(
    "Your password may be between 8 and 128 characters. How many characters would you like your password to consist of?"
  );
  if (
    passwordLength < 8 ||
    passwordLength > 128 ||
    passwordLength === null ||
    passwordLength === ""
  ) {
    alert(
      "Invalid entry. Please click the 'Generate Password' button and try again."
    );
    return;
  } else {
    console.log(passwordLength);

    // Special Character Addition Confirmation
    if (
      confirm(
        "Would you like special characters included in your password?\n(e.g !@#$%^&*()_-+={}[];:'`~<,>.?/|)"
      )
    ) {
      passwordList += specialChar;
      console.log(passwordList);
    }
    // Number Addition Confirmation
    if (
      confirm("Would you like numbers characters included in your password?")
    ) {
      passwordList += numberChar;
      console.log(passwordList);
    }
    // Lowercase Addition Confirmation
    if (
      confirm(
        "Would you like lowercase letter characters included in your password?"
      )
    ) {
      passwordList += lowercaseChar;
      console.log(passwordList);
    }
    // Uppercase Addition Confirmation
    if (
      confirm(
        "Would you like uppercase letter characters included in your password?"
      )
    ) {
      passwordList += uppercaseChar;
      console.log(passwordList);
    }
    // If no criteria selected start over
    if (passwordList.length === 0) {
      alert(
        "To meet the security requirments for generating a new password you must select at least one character category"
      );
      alert("Please click the 'Generate Password' button and try again.");
      // Generate Random Password according to selected criteria
    } else {
      for (var i = 0; i < passwordLength; i = i + 1) {
        var mixItUp = Math.floor(Math.random() * passwordList.length);
        finalPass = finalPass + passwordList[mixItUp];
      }
      console.log(finalPass);
    }
    // Write password in password input
    var passwordText = document.querySelector("#password");
    passwordText.value = finalPass;
  }
}
generateBtn.addEventListener("click", generatePassword);
