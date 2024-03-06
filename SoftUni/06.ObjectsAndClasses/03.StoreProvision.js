function storeProvision(provisions, newStock){
    let store = [];
    for (let i = 0; i < provisions.length; i += 2){
        store.push({name: provisions[i], quantity: Number(provisions[i + 1])});
    }
    for (let i = 0; i < newStock.length; i += 2){
        let product = newStock[i];
        let q = Number(newStock[i + 1]);
        let index = store.findIndex(x => x.name == product);
        if (index === -1){
            store.push({name: product, quantity: q});
        } 
        else { store[index].quantity += q; }
    }

    store.forEach(p => console.log(`${p.name} -> ${p.quantity}`));
}

// storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
// storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);