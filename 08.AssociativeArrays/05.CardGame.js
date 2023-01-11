function cardGame(input){
    let players = {};

    for (let line of input){
        let data = line.split(': ');
        let name = data.shift();
        let cards = data.shift().split(', ');
        if (Object.keys(players).includes(name)) {
            for (let card of cards){
                players[name].add(card);
            }
        } else {
            players[name] = new Set(cards);
        }
    }

    for (let [player, set] of Object.entries(players)) {
        let points = 0;
        for (let card of set){
            let value = 0;
            let info = card.split('');
            let type = info.pop();
            let power = info.join('');
            switch (type){
                case 'S':
                    value += 4;
                    break;
                case 'H':
                    value += 3;
                    break;
                case 'D':
                    value += 2;
                    break;
                case 'C':
                    value += 1;
                    break;
            }

            if (/^\d+$/.test(power)){
                value *= Number(power);
            } else {
                switch (power){
                    case 'J':
                        value *= 11;
                        break;
                    case 'Q':
                        value *= 12;
                        break;
                    case 'A':
                        value *= 14;
                        break;
                    case 'K':
                        value *= 13;
                        break;
                }
            }
            points += value;
            // console.log(`${card} -> ${value} -> ${points}`); // Used for testing.
        }

        console.log(`${player}: ${points}`);
    }
}

/*cardGame(['Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD']); */

/*cardGame(['John: 2C, 4H, 9H, AS, QS',
        'Slav: 3H, 10S, JC, KD, 5S, 10S',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Slav: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'John: JD, JD, JD, JD']); */