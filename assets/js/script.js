// Assignment code here

var pwInfo = [];
var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLow = "abcdefghijklmnopqrstuvwxyz";
var charNum = "1234567890";
var charSpec = "!@#$%^&*()";



var pwCriteria = function() {
    var pwLength = window.prompt("How long should the password be? (8-128 characters)")
    if (pwLength === "" || pwLength === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return pwCriteria();
    }

    var pwLength = JSON.parse(pwLength);

    if (pwLength < 8 || pwLength > 128) {
        window.alert("You need to choose between 8-128 characters! Please try again.");
        return pwCriteria();
    }
    console.log("PW char length is " + pwLength);


    var pwLowCase = window.confirm("Do you want to include lowercase letters?");
    if (pwLowCase) {
        window.alert("lowercase will be used");
    } else if (!pwLowCase) {
        window.alert("lowercase will not be used");
    };
    console.log("PW lowercase is " + pwLowCase);


    var pwUpCase = window.confirm("Do you want to include UPPERCASE letters?");
    if (pwUpCase) {
        window.alert("UPPERCASE will be used");
    } else if (!pwUpCase) {
        window.alert("UPPERCASE will not be used");
    };
    console.log("PW uppercase is " + pwUpCase);


    var pwNum = window.confirm("Do you want to include numbers?");
    if (pwNum) {
        window.alert("Numbers will be used");
    } else if (!pwNum) {
        window.alert("Numbers will not be used");
    };
    console.log("PW numeric is " + pwNum);


    var pwSpcl = window.confirm("Do you want to include special characters? (!@#$%^&*...");
    if (pwSpcl) {
        window.alert("special characters will be used");
    } else if (!pwSpcl) {
        window.alert("special characters will not be used");
    };
    console.log("PW special char is " + pwSpcl);

    // validate that at least one char type was chosen
    if (!pwUpCase & !pwLowCase & !pwNum & !pwSpcl) {
        window.alert("You need to choose at least one character type! Please try again.");
        return pwCriteria();
    }
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password-area");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", pwCriteria, writePassword);






// TINKERING CRAP VV


// var generatePassword = function() {
//     var result = "";
//     var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var charLow = "abcdefghijklmnopqrstuvwxyz";
//     var charNum = "1234567890";
//     var charSpec = "!@#$%^&*()";

//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     };
//     return result;
// };




// function makeid(length) {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

// console.log(makeid(5));



// var pwInfo = {
//   length: pwLength,
//   lowercase: pwLowCase,
//   uppercase: pwUpCase,
//   numeric: pwNum,
//   special: pwSpcl,
// };
// console.log(pwInfo);

// var savePwInfo = function() {
//   localStorage.setItem("pwInfo", JSON.stringify(pwInfo));
// };




//  var loadPwInfo = function() {
//   var savedPwCrit = localStorage.getItem("pwInfo");
//  console.log(savedPwCrit);
// };
// loadPwInfo();