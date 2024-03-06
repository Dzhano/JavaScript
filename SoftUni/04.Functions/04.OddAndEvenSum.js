function oddAndEvenSum(input){
    let number = input.toString();
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < number.length; i++){
        let n = Number(number[i]);
        if (n % 2 == 0){
            evenSum += n;
        } else {
            oddSum += n;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

// oddAndEvenSum(1000435);