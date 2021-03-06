// Assignment code here
var selectedUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M","N","O","P","Q","R", "S", "T", "U", "V", "W","X","Y","Z",]
var selectedLowercase = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
var selectedSpecialCharacters = ["1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","&","*","+","?",]
// Get references to the #generate element

var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var length = window.prompt("please select lenght of password")
  if (length >= 8 && length <= 128) {
  var uppercase = window.confirm("Would you like uppercase letters?") 
  var lowercase = window.confirm("Would you like lowercase letters?")
  var specialCharacter = window.confirm("Would you like special characters?")
  if (uppercase === true) {
    
  }

  if (lowercase === true) {

  }

  if (specialCharacter === true) {

  }

  else {
    window.alert("please try again")
    generatePassword();
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

}