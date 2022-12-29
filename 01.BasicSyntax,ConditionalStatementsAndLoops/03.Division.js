function division(number){
    let divisible = false;
    let d;
    if (number % 10 == 0){
        divisible = true;
        d = 10;
    }    
    else if (number % 7 == 0){
        divisible = true;
        d = 7;
    }
    else if (number % 3 == 0){
        divisible = true;
        if (number % 2 == 0){
            d = 6;
        }
        else {
            d = 3;
        }
    }
    else if (number % 2 == 0){
        divisible = true;
        d = 2;
    }

    if (divisible) {
        console.log("The number is divisible by " + d);
    } 
    else {
        console.log("Not divisible");
    }
}