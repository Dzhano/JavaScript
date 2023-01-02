function mining(minedGold){
    let bitcoins = 0;
    let money = 0;
    let day = 0;

    for (let i = 0; i < minedGold.length; i++){
        let currentGold = minedGold[i];
        if ((i + 1) % 3 == 0){
            currentGold *= 0.70;
        }
        money += currentGold * 67.51;
        while (money >= 11949.16){
            if (day == 0){
                day = i + 1;
            }
            money -= 11949.16;
            bitcoins++;
        }
    }
    
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (day > 0) {console.log(`Day of the first purchased bitcoin: ${day}`);}
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

// mining([3124.15, 504.212, 2511.124]);