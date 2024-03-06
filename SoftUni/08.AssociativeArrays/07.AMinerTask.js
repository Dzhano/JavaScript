function minerTask(input){
    let mine = new Map();
    for (let i = 0; i < input.length; i += 2){
        let resource = input[i];
        if (mine.has(resource)) {
            let newQuantity = mine.get(resource) + Number(input[i + 1]);
            mine.set(resource, newQuantity);
        } else {
            mine.set(resource, Number(input[i + 1]));
        }
    }

    for (let resource of mine) {
        console.log(`${resource[0]} -> ${resource[1]}`);
    }
}

/* minerTask(['Gold', '155',
            'Silver', '10',
            'Copper', '17']); */