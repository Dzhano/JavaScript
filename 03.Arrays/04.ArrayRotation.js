function arrayRotation(array, n){
    for (let i = 0; i < n; i++){
        let first = array[0];
        for (let y = 0; y < array.length - 1; y++){
            array[y] = array[y + 1];
        }
        array[array.length - 1] = first;
    }
    console.log(array.join(" "));
}

// arrayRotation([2, 4, 15, 31], 5);