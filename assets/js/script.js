//set password arrays for all options
const unsorted = "qwertyuiopasdfghjklzxcvbnm";
var lowercaseArray = unsorted.split("").sort();
var uppercaseArray = unsorted.toUpperCase().split("").sort();
const badnumbers = "0123456789";
var numberArray = badnumbers.split("");
const badsymbols = "!@#$%^&*()-=_+`~:/?.>,<;'";
var symbolArray = badsymbols.split("");
var passArray1 = lowercaseArray.concat(
  uppercaseArray.concat(numberArray.concat(symbolArray))
);
var passArray2 = lowercaseArray.concat(uppercaseArray.concat(numberArray));
var passArray3 = lowercaseArray.concat(uppercaseArray);

// set password length to random number within range
var passlength = Math.random() * (128 - 8) + 8;
console.log(passlength);

//declare HTML variables
var genbtn = document.querySelector("#generatebutton");
var symboltoggle = document.querySelector("#symboltoggle");
var passfield = document.querySelector("#passwordfield");

//Add eventlistener
genbtn.addEventListener("click", generatePassword);

function generatePassword(event) {
  event.preventDefault();
  var password = "";
  for (let i = 0; i < passlength; i++) {
    var passChar = passArray1[Math.floor(Math.random() * passArray1.length)];
    var password = password.concat(passChar);
  }
  passfield.value = password;
}
