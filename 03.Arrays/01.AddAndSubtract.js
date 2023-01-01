function addAndSubstract(numbers){
    let sum = 0;
    let modifiedSum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
        if (numbers[i] % 2 == 0){
            numbers[i] += i;
        } else {
            numbers[i] -= i;
        }
        modifiedSum += numbers[i];
    }

    console.log(numbers);
    console.log(sum);
    console.log(modifiedSum);
}

// addAndSubstract([5, 15, 23, 56, 35]);