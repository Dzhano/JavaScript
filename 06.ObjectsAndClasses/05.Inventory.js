function inventory(input){
    let heroes = [];
    for (let data of input){
        let info = data.split(" / ");
        let name = info.shift();
        let level = Number(info.shift());
        heroes.push({name, level, items: info.shift()});
    }

    heroes = heroes.sort(function(a, b) {
        return a.level - b.level;
      });
      
    for (let hero of heroes){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

/*inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

inventory(['Batman / 2 / Banana, Gun',
'Superman / 18 / Sword',
'Poppy / 28 / Sentinel, Antara']); */