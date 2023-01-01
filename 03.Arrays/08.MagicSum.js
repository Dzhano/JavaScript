function magicSum(array, number){
    for (let i = 0; i < array.length; i++){
        for (let y = i + 1; y < array.length; y++){
            if (array[i] + array[y] == number){
                console.log(`${array[i]} ${array[y]}`);
            }
        }
    }
}

// magicSum([14, 20, 60, 13, 7, 19, 8], 27);