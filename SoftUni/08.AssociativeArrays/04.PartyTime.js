function partyTime(input){
    let guests = new Set();
    let guest = input.shift();
    while (guest != "PARTY") {
        guests.add(guest);
        guest = input.shift();
    }
    
    for (let person of input){
        guests.delete(person);
    }

    let sorted = Array.from(guests).sort();
    console.log(guests.size);
    sorted.forEach(c => console.log(c));
}

/* partyTime(['7IK9Yo0h', '9NoBUajQ',
            'Ce8vwPmE', 'SVQXQCbc',
            'tSzE5t0p', 'PARTY',
            '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']); */