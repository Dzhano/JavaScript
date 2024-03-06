function odd(n){
    let number = 1;
    let sum = 0;
    for (let i = 0; i < n; i++){
        console.log(number);
        sum += number;
        number += 2;
    }
    console.log("Sum: " + sum);
}