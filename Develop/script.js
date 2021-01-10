
function generatePassword(){
getLength();
getLuckyNumber();
getinitials();
getdogORcat();

var charInput = window.prompt(
  "Choose Characters You want to USE, Enter 1 for lowercase, Enter 2 for UPPERCASE, Enter 3 for Numericals, Enter 4 for Special Characters "
);
if (charInput === null || charInput === "" || isNaN(charInput)){
  window.alert("Enter a valid answer");
  return getCharType();
}
charInput = parseInt(charInput);

  //Swtich statement to generate char types
  switch (charInput) {
    case 1:
      randomchar();
      break;
    case 2:
     randomchar2();
      break;
    case 3:
      randomchar3();
      break;
    case 4:
     randomchar4();
    default:
      window.alert("You did not enter a valid option. Try Again");
      generatePassword();
      break;
  }

if(passwordCriteria.dogOrcatInput === 1 && charInput === 1 ){
window.alert("Your password is " + passwordCriteria.initals + passwordCriteria.luckyNumber + passwordCriteria.charResult + ".");
}
if(passwordCriteria.dogOrcatInput === 1 && charInput === 2 ){
  window.alert("Your password is " + passwordCriteria.initals + passwordCriteria.luckyNumber + passwordCriteria.charResult2 + ".");
}
if(passwordCriteria.dogOrcatInput === 1 && charInput === 3 ){
  window.alert("Your password is " + passwordCriteria.initals + passwordCriteria.luckyNumber + passwordCriteria.charResult3 + ".");
}
if(passwordCriteria.dogOrcatInput === 1 && charInput === 4 ){
  window.alert("Your password is " + passwordCriteria.initals + passwordCriteria.luckyNumber + passwordCriteria.charResult4 + ".");
}
if(passwordCriteria.dogOrcatInput === 2 && charInput === 1 ){
  window.alert("Your password is " + passwordCriteria.initals + passwordCriteria.luckyNumber + passwordCriteria.charResult + ".");
}
if(passwordCriteria.dogOrcatInput === 2 && charInput === 2 ){
  window.alert("Your password is " + passwordCriteria.initals + passwordCriteria.luckyNumber + passwordCriteria.charResult2 + ".");
}
if(passwordCriteria.dogOrcatInput === 2 && charInput === 3 ){
  window.alert("Your password is " + passwordCriteria.initals + passwordCriteria.luckyNumber + passwordCriteria.charResult3 + ".");
}
if(passwordCriteria.dogOrcatInput === 2 && charInput === 4 ){
  window.alert("Your password is " + passwordCriteria.initals + passwordCriteria.luckyNumber + passwordCriteria.charResult4 + ".");
}
}
//Function that determines lentgh
var getLength = function(){
  var lenght = window.prompt(
    "Enter how long your password will be in number form between 8 and 128"
  );
  if(lenght === null || lenght === "" || (lenght <8 || lenght > 128) || isNaN(lenght)) {
    window.alert("Please Enetr a valid Number between 8 ans 128 Example type 10")
    return getLength();
  }
  lenght = parseInt(lenght);
  length = length - 4;
  console.log(lenght);
  return lenght;
  }
  //Function for lucky number criteria 
  function getLuckyNumber(){
  var lucky = window.prompt (
    "Enter your lucky number thats single or double didgit, single digits written as 05 for example"
  );
  if(lucky === null || lucky ==="" || (lucky <0 || lucky > 99) || isNaN(lucky)){
    window.alert("Please Enter a valid Number between 8 ans 128 Example type 10")
    return getLuckyNumber();
  }
  lucky = parseInt(lucky);
  console.log(lucky);
  return lucky;
  }
  //Funtion for Initals 
  var getinitials = function(){
    initals = "";
  
  while(initals === "" || initals === null){
    initals = prompt("Enter the First letter of your first and last name Exmaple Alex Nami would enter AN")
  }
  console.log("Initials are " + initals);
  return initals;
  }
  
  // dog n cat is essentially heads or tails to determine where weather criteria willl be at start or end of password
  var getdogORcat = function() {
  var dogOrcatInput = window.prompt (
    "Do you prefer Cats or Dogs 1 for Cat 2 for Dog"
  );
  if(dogOrcatInput === null || dogOrcatInput ==="" || (dogOrcatInput <0 || dogOrcatInput > 2) || isNaN(dogOrcatInput)){
    window.alert("Please Enter a valid Number")
    return getdogORcat();
  }
  dogOrcatInput = parseInt(dogOrcatInput);
  console.log(dogOrcatInput);
  return dogOrcatInput;
  }
  var randomchar = function(long){
    var charResult ='';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var characterslong = characters.long;
    for (var i =0; i<long; i++){
      charResult += characters.charAt(Math.floor(Math.random() * characterslong));
    }
    return charResult;
    }
    var randomchar2 = function (long){
      var charResult2 = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var characterslong = characters.long;
      for (var i =0; i<long; i++){
        charResult2 += characters.charAt(Math.floor(Math.random() * characterslong));
      }
      return charResult2;
      }
      var randomchar3 = function(long){
        var charResult3 ='';
        var characters = '1234567890';
        var characterslong =characters.long;
        for (var i =0; i<long; i++){
          charResult3 += characters.charAt(Math.floor(Math.random() * characterslong));
        }
        return charResult3;
      }
      var randomchar4 = function(long){
        var charResult4 ='';
        var characters = '1234567890';
        var characterslong =characters.long;
        for (var i =0; i<long; i++){
          charResult4 += characters.charAt(Math.floor(Math.random() * characterslong));
        }
        return charResult4;
        }

  var passwordCriteria = {
  lenght: getLength(),
  luckyNumber: getLuckyNumber(),
  initals: getinitials(),
  dogOrcatInput: getdogORcat(),
  charResult: randomchar(),
  charResult1: randomchar2(),
  charResult2: randomchar3(),
  charResult3: randomchar4(),
  }
  
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();