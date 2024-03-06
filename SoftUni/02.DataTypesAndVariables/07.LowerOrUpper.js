function lowerOrUpper(letter){
    let number = letter.charCodeAt();
    if (number >= 65 && number <= 90){
        console.log("upper-case");
    }
    else if (number >= 97 && number <= 122){
        console.log("lower-case");
    }
}