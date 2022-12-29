function vacation(groupOfPeople, typeOfGroup, dayOfTheWeek){
    let price = 0;
    switch (typeOfGroup){
        case "Students":
            switch (dayOfTheWeek){
                case "Friday":
                    price = 8.45;
                    break;
                case "Saturday":
                    price = 9.80;
                    break;
                case "Sunday":
                    price = 10.46;
                    break;
            }
            if (groupOfPeople >= 30){
                price *= 0.85;
            }
            break;
        case "Business":
            switch (dayOfTheWeek){
                case "Friday":
                    price = 10.90;
                    break;
                case "Saturday":
                    price = 15.60;
                    break;
                case "Sunday":
                    price = 16.00;
                    break;
            }
            if (groupOfPeople >= 100){
                groupOfPeople -= 10;
            }
            break;
        case "Regular":
            switch (dayOfTheWeek){
                case "Friday":
                    price = 15.00;
                    break;
                case "Saturday":
                    price = 20.00;
                    break;
                case "Sunday":
                    price = 22.50;
                    break;
            }
            if (groupOfPeople >= 10 && groupOfPeople <= 20){
                price *= 0.95;
            }
            break;
    }
    price *= groupOfPeople;
    console.log(`Total price: ` + price.toFixed(2));
}