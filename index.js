// Random Password Generator

function generatePassword(passwordlength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_-+=";

    let allowedChars = "";
    let password = "";

    // allowedChars += includeLowerCase ? lowercaseChars : " " ;
    // allowedChars += includeUpperCase ? uppercaseChars : " "; 
    // allowedChars += includeNumbers ? numbersChars : " ";
    // allowedChars += includeSymbols ? symbolsChars : " ";

    if(includeLowerCase){allowedChars += lowercaseChars};
    if(includeUpperCase){allowedChars += uppercaseChars};
    if(includeNumbers){allowedChars += numbersChars};
    if(includeSymbols){allowedChars += symbolsChars};

    if (allowedChars.length === 0) {
        return "No characters selected!";
    }

    for(let i = 0 ; i < passwordlength ; i++){
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

const generate  = document.getElementById("generate");
generate.addEventListener("click" ,function(){

    document.getElementById("result").innerHTML = "";

    const passwordlength = document.getElementById("passwordlength").value;
    const includeLowercase = document.getElementById("includeLowerCase").checked;
    const includeUppercase = document.getElementById("includeUpperCase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const result = generatePassword(passwordlength,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols)

document.getElementById("result").innerHTML = result;

});



               