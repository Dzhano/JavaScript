function solve(input){
    let furniture = [];
    let moneySpent = 0;
    for (const stuff of input){
        if (stuff == "Purchase") { break; }
        let regex = />>(?<name>[A-Z]+[a-z]*)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/g;

        let data = regex.exec(stuff);
        if (data){
            furniture.push(data.groups.name);
            moneySpent += Number(data.groups.price) * Number(data.groups.quantity);
        }
    }

    console.log("Bought furniture:");
    if (furniture.length > 0) console.log(furniture.join('\n'));
    console.log(`Total money spend: ${moneySpent.toFixed(2)}`);
}

// solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);