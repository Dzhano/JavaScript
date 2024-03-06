function travelTime(input){
    let places = {};
    for (let destination of input){
        let [country, town, offer] = destination.split(' > ');
        if (Object.keys(places).includes(country)){
            if (Object.keys(places[country]).includes(town)) {
                let price = places[country][town];
                let newOffer = Number(offer);
                if (price >= newOffer){
                    places[country][town] = newOffer;
                }
            } else {
                places[country][town] = Number(offer);
            }
        } else {
            places[country] = {[town]: Number(offer)};
        }
    }

    let sorted = Object.entries(places).sort((a, b) => a[0].localeCompare(b[0]));
    for (let place of sorted){
        let output = `${place[0]} ->`;
        let towns = Object.entries(place[1]).sort((a, b) => a[1] - b[1]);
        towns.forEach(t => output += ` ${t[0]} -> ${t[1]}`);
        console.log(output);
    }
    
}

/* travelTime(["Bulgaria > Sofia > 500",
            "Bulgaria > Sopot > 800",
            "France > Paris > 2000",
            "Albania > Tirana > 1000",
            "Bulgaria > Sofia > 200"]); */