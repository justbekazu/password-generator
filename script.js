// Assignment code here
var selectedUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M","N","O","P","Q","R", "S", "T", "U", "V", "W","X","Y","Z",]
var selectedLowercase = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
var selectedSpecialCharacters = ["1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","&","*","+","?",]
// Get references to the #generate element

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);


function generatePassword() {
  var length = window.prompt("please select lenght of password")
  if (length >= 8 && length <= 128) {
  var uppercase = window.confirm("Would you like uppercase letters?") 
  var lowercase = window.confirm("Would you like lowercase letters?")
  var specialCharacter = window.confirm("Would you like special characters?")

  if (
    uppercase === false && lowercase === false && specialCharacter === false
  ) {
    alert("please select something")
    return
  }
  
var selectionStorage = {
  length:length, uppercase:uppercase, lowercase:lowercase, specialCharacter:specialCharacter
}
return selectionStorage
}

function getRandomValues(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  var elementSelected = array[randomIndex]
  return elementSelected
} 

function makePassword() {
 var selectedStorageItems = generatePassword()
 var capturedValues = []
 var selectedCharaters = []

 if (selectedStorageItems.uppercase) {
   elementSelected = elementSelected.concat(selectedUppercase)
  selectedCharaters.push(getRandomValues(selectedUppercase))
 }
 if (selectedStorageItems.lowercase) {
  elementSelected = elementSelected.concat(lowercase)
 selectedCharaters.push(getRandomValues(lowercase))
}
if (selectedStorageItems.selectedSpecialCharacters) {
  elementSelected = elementSelected.concat(selectedSpecialCharacters)
 selectedCharaters.push(getRandomValues(selectedSpecialCharacters))
}
 

}






// Write password to the #password input
// // function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// }
// //once the characters have been selected, the must be combined
// //once the chacaters have ben combined then the number of characters selected for the password must be applied to the random formula


// // function combinedCharacters() {
// // //this is where the selected symbols will be pooled together
// // }

// // var randomPassword = passwordGenerated[Math.floor(Math.random()*selectedCharacters.length)];

// // alert(randomPassword);

// // var randomNumber = Math.floor (Math.random() * arrChars.length);

// // for (var i = 0; i < 5; i++) {
// //   randomStr += arrChar[randomN];
// // }




// // var str = "abc123";
// // var arrChars = ["a", "b", "c", "1", "2", "3", "+"];
// // var maxLen = 5;
// // var randomStr = "";
// // for (var i = 0; i < maxLen; i++) {
// //     // generate a random number that will serve as a random index
// //     var randomN = Math.floor(Math.random() * arrChars.length);
// //     // concatenate the random character to the random string
// //     randomStr += arrChars[randomN];
// // }
// // console.log(randomStr);

// For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
for (var i = 0; i < options.length; i++) {
  var possibleCharacter = getRandom(possibleCharacters);
  result.push(possibleCharacter);
}
// Mix in at least one of each guaranteed character in the result
for (var i = 0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i];
}
// Transform the result into a string and pass into writePassword
return result.join('');
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector('#password');
passwordText.value = password;
}