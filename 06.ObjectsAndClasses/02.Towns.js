function solve(input){
    let towns = [];
    for (let text of input){
        let [town, latitude, longitude] = text.split(" | ");
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        towns.push({town, latitude, longitude});
    }
    towns.forEach(t => console.log(t));
}

// solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);