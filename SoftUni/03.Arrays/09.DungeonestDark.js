function dungeonestDark(input){
    let rooms = input[0].split('|');
    let health = 100;
    let coins = 0;
    let alive = true;
    for (let i = 0; i < rooms.length; i++){
        let things = rooms[i].split(" ");
        let item = things[0];
        let number = Number(things[1]);

        switch (item){
            case "potion":
                if (health + number > 100){
                    number -= health + number - 100;
                }
                console.log(`You healed for ${number} hp.`);
                health += number;
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                coins += number;
                console.log(`You found ${number} coins.`);
                break;
            default:
                health -= number;
                if (health > 0){
                    console.log(`You slayed ${item}.`);
                } else {
                    console.log(`You died! Killed by ${item}.`);
                    console.log(`Best room: ${i + 1}`);
                    alive = false;
                }
                break;
        }
            
        if (alive == false) { break; }
    }
    if (alive){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

// dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);