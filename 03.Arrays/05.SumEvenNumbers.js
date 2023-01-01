function sumEvenNumbers(array){
    for (let i = 0; i < array.length; i++){
        array[i] = Number(array[i]);
    }

    let sum = 0;
    for (let number of array){
        if (number % 2 == 0){
            sum += number;
        }
    }

    console.log(sum);
}

sumEvenNumbers(["12", "13", "56"]);