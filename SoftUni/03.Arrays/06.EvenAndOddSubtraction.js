function sumsDifference(array){
    for (let i = 0; i < array.length; i++){
        array[i] = Number(array[i]);
    }

    let sumEven = 0;
    let sumOdd = 0;
    for (let number of array){
        if (number % 2 == 0){
            sumEven += number;
        }
        else {
            sumOdd += number;
        }
    }

    console.log(sumEven - sumOdd);
}