function houseParty(input){
    let guests = [];
    for (let i = 0; i < input.length; i++){
        let person = input[i].split(' ')[0];
        if (input[i].includes(" is going!")){
            if (guests.includes(person)){
                console.log(`${person} is already in the list!`);
            } else {
                guests.push(person);
            }
        }
        else if (input[i].includes(" is not going!")){
            if (guests.includes(person)){
                let index = guests.indexOf(person);
                guests.splice(index, 1);
            } else {
                console.log(`${person} is not in the list!`);
            }
        }
    }
    console.log(guests.join('\n'));
}

// houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);