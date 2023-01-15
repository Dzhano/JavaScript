function solve(input){
    let racers = input.shift().split(', ');
    let race = {};
    for (const info of input){
        let name = info.match(/[A-Za-z]/g).join('');
        if (name.length > 0 && racers.includes(name)){
            let distance = info.match(/\d/g).map(Number)
                                            .reduce((partialSum, a) => partialSum + a, 0);
            if (Object.keys(race).includes(name)) { race[name] += distance; }
            else { race[name] = distance; }
        }
    }

    let sorted = Object.entries(race).sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < 3; i++){
        switch (i){
            case 0:
                console.log(`1st place: ${sorted[i][0]}`);
                break;
            case 1:
                console.log(`2nd place: ${sorted[i][0]}`);
                break;
            case 2:
                console.log(`3rd place: ${sorted[i][0]}`);
                break;
        }
    }
}

/* solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']); */