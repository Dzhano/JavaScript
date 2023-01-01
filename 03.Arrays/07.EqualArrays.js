function sumsDifference(array1, array2){
    for (let i = 0; i < array1.length; i++){
        array1[i] = Number(array1[i]);
    }
    for (let i = 0; i < array2.length; i++){
        array2[i] = Number(array2[i]);
    }

    let equal = true;
    let sum = 0;
    for (let i = 0; i < array1.length; i++){
        if (array1[i] != array2[i]){
            equal = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
        sum += array1[i];
    }

    if (equal){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}