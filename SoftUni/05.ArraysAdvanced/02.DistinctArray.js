function distinctArray(array){
    for (let i = 0; i < array.length; i++){
        let index = array.indexOf(array[i], i + 1);
        while (index !== -1){
            array.splice(index, 1);
            index = array.indexOf(array[i], i + 1);
        }
    }
    console.log(array.join(' '));
}

// distinctArray([20, 8, 12, 13, 4, 4, 8, 20, 5]);