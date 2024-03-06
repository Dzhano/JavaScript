function StarEnigma(input){
    let n = Number(input.shift());
    let attackedPlanets = [];
    let destroyedPlanets = [];
    for (let i = 0; i < n; i++){
        let times = input[i].match(/[starSTAR]/g).length;
        let stringArray = Array.from(input[i]);
        let newString = '';
        for (let str of stringArray) {
            newString += String.fromCharCode(str.charCodeAt() - times);
        }

        let regex = /@(?<name>[A-Z][a-z]+)([^@\-!:>]*):(?<population>\d+)([^@\-!:>]*)!(?<attack>[AD])!([^@\-!:>]*)->(?<soldiers>\d+)/g;
        let data = regex.exec(newString);
        if (data == null) { continue; }

        if (data.groups.attack == "A") {
            attackedPlanets.push(data.groups.name);
        } else if (data.groups.attack == "D") {
            destroyedPlanets.push(data.groups.name);
        }
    }

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    if (attackedPlanets.length > 0) {
        attackedPlanets = attackedPlanets.sort();
        attackedPlanets.forEach(p => console.log(`-> ${p}`));
    }

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    if (destroyedPlanets.length > 0) {
        destroyedPlanets = destroyedPlanets.sort();
        destroyedPlanets.forEach(p => console.log(`-> ${p}`));
    }
}

/* StarEnigma(['3',
            "tt(''DGsvywgerx>6444444444%H%1B9444",
            'GQhrr|A977777(H(TTTT',
            'EHfsytsnhf?8555&I&2C9555SR']); */