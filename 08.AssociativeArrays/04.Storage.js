function storage(input){
    let map = new Map();
    
    for (let string of input){
        let tokens = string.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if (map.has(product)){
            let newQunatity = map.get(product) + quantity;
            map.set(product, newQunatity);
        } else {
            map.set(product, quantity);
        }
    }

    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

// storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);