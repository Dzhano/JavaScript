const result = document.getElementById("Result");


function convert(event){
    event.preventDefault(); // Prevent form submission
    
    let length = Number(document.getElementById("length").value);
    const includeLowercaseCheck = document.getElementById("includeLowercase");
    const includeUppercaseCheck = document.getElementById("includeUppercase");
    const includeNumbersCheck = document.getElementById("includeNumbers");
    const includeSymbolsCheck = document.getElementById("includeSymbols");

    let allowedChars = includeLowercaseCheck.checked ? "abcdefghijklmnopqrstuvwxyz" : "";
    allowedChars += includeUppercaseCheck.checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    allowedChars += includeNumbersCheck.checked ? "0123456789" : "";
    allowedChars += includeSymbolsCheck.checked ? "!@#$%^&*()_+-=" : "";

    let password = "";

    if (length <= 0){
        password = "The length of the password should be 1 or bigger!"
    }
    else if (allowedChars.length === 0){
        password = "At least 1 set of characters needs to be selected."
    }
    else{
        for (let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
    }

    result.textContent = password;
}