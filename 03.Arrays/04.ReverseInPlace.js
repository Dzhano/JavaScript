function reverseArray(array){
    for (let i = 0; i < array.length / 2; i++){
        let first = array[i];
        // let last = array[array.length - 1 - i];

        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = first;
    }

    console.log(array.join(' '));
}