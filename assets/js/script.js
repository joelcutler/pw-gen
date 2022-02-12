// Assignment code here

var pwInfo = {
    length: 0,
    lowercase: false,
    uppercase: false,
    numeric: false,
    special: false,
};

var pwCriteria = function() {

    while (true) {
        var pwLength = window.prompt("How long should the password be? (8-128 characters)")
        if (pwLength >= 8 || pwLength >= 128) {
            pwInfo.length = pwLength;
            break;

        } else {
            window.alert("You need to provide a number between 8-128! Please try again.");
        }
    }
    console.log("PW char length is " + pwLength);

    var allFalse = true;
    while (allFalse) {

        var pwLowCase = window.confirm("Do you want to include lowercase letters?");
        if (pwLowCase) {
            window.alert("lowercase will be used");
            pwInfo.lowercase = pwLowCase;
        } else if (!pwLowCase) {
            window.alert("lowercase will not be used");
        };
        console.log("PW lowercase is " + pwLowCase);


        var pwUpCase = window.confirm("Do you want to include UPPERCASE letters?");
        if (pwUpCase) {
            window.alert("UPPERCASE will be used");
            pwInfo.uppercase = pwUpCase;
        } else if (!pwUpCase) {
            window.alert("UPPERCASE will not be used");
        };
        console.log("PW uppercase is " + pwUpCase);


        var pwNum = window.confirm("Do you want to include numbers?");
        if (pwNum) {
            window.alert("Numbers will be used");
            pwInfo.numeric = pwNum;
        } else if (!pwNum) {
            window.alert("Numbers will not be used");
        };
        console.log("PW numeric is " + pwNum);


        var pwSpcl = window.confirm("Do you want to include special characters? (!@#$%^&*...");
        if (pwSpcl) {
            window.alert("special characters will be used");
            pwInfo.special = pwSpcl;
        } else if (!pwSpcl) {
            window.alert("special characters will not be used");
        };
        console.log("PW special char is " + pwSpcl);


        // validate that at least one char type was chosen

        if (!pwUpCase && !pwLowCase && !pwNum && !pwSpcl) {
            window.alert("You need to choose at least one character type! Please try again.");

        } else if (pwUpCase || pwLowCase || pwNum || pwSpcl) {
            allFalse = false;
            break;
        };
    }
    console.log(pwInfo);
    return pwInfo;
};


var generatePassword = function() {
    var pwObject = pwCriteria();
    var password = "";
    var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charLow = "abcdefghijklmnopqrstuvwxyz";
    var charNum = "1234567890";
    var charSpec = "!@#$%^&*()";


};

//index the arrays
//take user vals that are selected and randomize
// create iterator for loop
// put randomNumber var in the for loop
// create a var included to store all values of arrays (concat)


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




// var charUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var charLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var charNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// var charSpec = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];




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