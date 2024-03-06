function products(products){
    let sorted = products.sort();
    for (let i = 0; i < sorted.length; i++){
        console.log(`${i + 1}.${sorted[i]}`);
    }
}

// products(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);