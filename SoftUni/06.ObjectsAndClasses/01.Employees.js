function solve(input){
    let people = [];
    input.forEach(person => people.push({name: person, personalNumber: person.length}));
    people.forEach(x => console.log(`Name: ${x.name} -- Personal Number: ${x.personalNumber}`));
}

// solve(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);