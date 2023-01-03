function passwordValidator(password){
    let valid = validLength(password.length);
    valid = validCharacters(password);
    valid = twoIntegers(password);

    if (valid) {
        console.log("Password is valid");
    }

    function validLength(length){
        if (length < 6 || length > 10){
            console.log("Password must be between 6 and 10 characters");
            return false;
        } else { return true; }
    }
    function validCharacters(input){
        let isValid = false;
        for (let i = 0; i < input.length; i++){
            let char = input[i].charCodeAt();
            if ((char >= 48 && char <= 57) || (char >= 65 && char <= 90) || (char >= 97 && char <= 122)){
                isValid = true;
            } else {
                isValid = false;
                break;
            }
        }
        if (!isValid){
            console.log("Password must consist only of letters and digits");
        }
        return isValid;
    }
    function twoIntegers(input){
        let integers = 0;
        for (let i = 0; i < input.length; i++){
            let char = input[i].charCodeAt();
            if (char >= 48 && char <= 57){
                integers++;
                if (integers == 2){ return true; }
            }
        }
        console.log("Password must have at least 2 digits");
        return false;
    }
}

// passwordValidator("MyPass123");