function cityDisplay(city){
    for (let key of Object.keys(city)) {
        console.log(`${key} -> ${city[key]}`);
    }
}

/*cityDisplay({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});*/