function bombNumbers(numbers, specials){
    let bomb = specials[0];
    let power = specials[1];

    let index = numbers.indexOf(bomb);
    while (index !== -1){
        index -= power;
        let change = 0;
        if (index < 0){
            change = index;
            index = 0;
        }
        let remove = (power * 2) + 1 + change;
        numbers.splice(index, remove);
        index = numbers.indexOf(bomb);
    }
    console.log(numbers.reduce((partialSum, a) => partialSum + a, 0))
}

// bombNumbers([1, 5, 2, 2, 4], [4, 2]);