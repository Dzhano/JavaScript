function signCheck(numOne, numTwo, numThree){
    let negatives = 0;
    if (numOne < 0) {negatives++;}
    if (numTwo < 0) {negatives++;}
    if (numThree < 0) {negatives++;}
    if (numOne == 0 || numTwo == 0 || numThree == 0) {negatives = 0}

    if (negatives == 0 || negatives == 2){
        console.log("Positive");
    }
    else if (negatives == 1 || negatives == 3){
        console.log("Negative");
    }
}