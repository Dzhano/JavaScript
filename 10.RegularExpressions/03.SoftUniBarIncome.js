function barIncome(input){
    let totalIncome = 0;
    for (const info of input){
        if (info == "end of shift") { break; }
        let regex = /%(?<customer>[A-Z][a-z]+)%([^|$%.]*)<(?<product>\w+)>([^|$%.]*)\|(?<count>\d+)\|([^|$%.\d]*)(?<price>\d+\.?\d*)\$/g;

        let data = regex.exec(info);
        if (data){
            let totalPrice = Number(data.groups.count) * Number(data.groups.price);
            console.log(`${data.groups.customer}: ${data.groups.product} - ${totalPrice.toFixed(2)}`);
            totalIncome += totalPrice;
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

// barIncome(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift']);