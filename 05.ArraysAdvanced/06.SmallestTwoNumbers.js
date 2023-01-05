function Smallest(input){
    let sortedInAscending = input.sort((a, b) => {
        return a - b;
    });
    console.log(sortedInAscending.slice(0, 2).join(' '));
}

// Smallest([30, 15, 50, 5]);