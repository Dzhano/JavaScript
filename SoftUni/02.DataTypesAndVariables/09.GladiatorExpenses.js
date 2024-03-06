function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let trashedHelmets = Math.floor(lostFights / 2);
    let trashedSwords = Math.floor(lostFights / 3);
    let trashedShields = Math.floor(lostFights / 6);
    let trashedArmors = Math.floor(lostFights / 12);
    
    let expences = (trashedHelmets * helmetPrice) + (trashedSwords * swordPrice) + (trashedShields * shieldPrice) + (trashedArmors * armorPrice);

    console.log(`Gladiator expenses: ${expences.toFixed(2)} aureus`);
}