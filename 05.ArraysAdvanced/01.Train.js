function train(input){
    let wagons = input.
    shift().
    split(' ')
    .map(Number);
    let maxCapacity = input.shift();
    for (let i = 0; i < input.length; i++){
        if (input[i].includes("Add")){
            let adding = input[i].split(' ');
            wagons.push(Number(adding[1]));
        } else {
            let passengers = Number(input[i]);
            let index = wagons.findIndex(w => w + passengers <= maxCapacity);
            wagons[index] += passengers;
        }
    }
    console.log(wagons.join(' '));
}

// train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);