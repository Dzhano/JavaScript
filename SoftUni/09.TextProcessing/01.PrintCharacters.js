function printCharacters(string){
    for (let char of string){
        console.log(char);
    }
    // Array.from(string).forEach(c => console.log(c)); // Another shorter way.
}

// printCharacters('Ben');