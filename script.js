// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var passwordLength = prompt("Please select the lentgh of your password. Your Password may be between 8-128 characters long.");

    if (passwordLength < 8) {
        alert("This is not enough characters to create a sucure password.")
    }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);