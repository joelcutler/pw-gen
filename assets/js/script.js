// Assignment code here

var pwCriteria = function() {
    //
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

    var pwInfo = {
        length: pwLength,
        lowercase: pwLowCase,
        uppercase: pwUpCase,
        numeric: pwNum,
        special: pwSpcl,
    };
    console.log(pwInfo);
};






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", pwCriteria, writePassword);