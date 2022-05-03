//set password arrays for all options
const unsorted = "qwertyuiopasdfghjklzxcvbnm";
var lowercaseArray = unsorted.split("").sort();
var uppercaseArray = unsorted.toUpperCase().split("").sort();
const badnumbers = "0123456789";
var numberArray = badnumbers.split("");
const badsymbols = "!@#$%^&*()-=_+`~:/?.>,<;'";
var symbolArray = badsymbols.split("");
var passwordArray = lowercaseArray;

//declare HTML variables
var genbtn = document.querySelector("#generatebutton");
var symboltoggle = document.querySelector("#symboltoggle");
var passfield = document.querySelector("#passwordfield");
var passlength = 12;
var symbols = true;
var numbers = true;
var upperCase = true;

//delete password on reload
passfield.value = "";

//Add eventlistener
genbtn.addEventListener("click", queryPassword);

function generatePassword() {
  var password = "";
  passwordArray.sort();
  console.log(passwordArray);
  for (let i = 0; i < passlength; i++) {
    var passChar =
      passwordArray[Math.floor(Math.random() * passwordArray.length)];
    password = password.concat(passChar);
  }
  passfield.value = password;
  console.log(password);
  passwordArray = lowercaseArray;
}

function queryPassword() {
  passfield.value = "";
  passlength = window.prompt("How many characters would you like?", 12);
  if (passlength === null || passlength === "") {
    return;
  } else if (passlength < 8 || passlength > 128) {
    window.alert("Please choose a number between 8 and 128");
    queryPassword();
  } else if (7 < passlength < 129) {
    console.log(passlength);
    //start password prompts
    symbols = window.confirm("Click OK to allow special characters");
    if (symbols == true) {
      passwordArray = passwordArray.concat(symbolArray);
    }
    console.log(symbols);
    numbers = window.confirm("Click OK to allow numbers");
    if (numbers == true) {
      passwordArray = passwordArray.concat(numberArray);
    }
    console.log(numbers);
    upperCase = window.confirm("Click OK to allow upper case letters");
    if (upperCase == true) {
      passwordArray = passwordArray.concat(uppercaseArray);
    }
    console.log(upperCase);
    var finalize = window.confirm(
      "Symbols = " +
        symbols +
        "\nNumbers = " +
        numbers +
        "\nUppercase = " +
        upperCase +
        "\n\nAre these parameters okay?"
    );
    if (finalize == false) {
      queryPassword();
    } else {
      generatePassword();
    }
  }
}
