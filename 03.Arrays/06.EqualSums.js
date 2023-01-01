function equalSums(array){
    let equal = false;
    for (let i = 0; i < array.length; i++){
        let leftSum = 0;
        for (let y = 0; y < i; y++){
            leftSum += array[y];
        }
        let rightSum = 0;
        for (let z = i + 1; z < array.length; z++){
            rightSum += array[z];
        }

        if (leftSum == rightSum) {
            console.log(i);
            equal = true;
        }
    }

    if (equal == false) {
        console.log("no");
    }
}

// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);