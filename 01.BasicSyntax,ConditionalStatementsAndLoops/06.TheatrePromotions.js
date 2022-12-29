function promotions(typeOfDay, ageOfPerson){
    switch (typeOfDay){
        case "Weekday":
            if (ageOfPerson >= 0 && ageOfPerson <= 18){
                console.log(12 + "$");
            }
            else if (ageOfPerson > 18 && ageOfPerson <= 64){
                console.log(18 + "$");
            }
            else if (ageOfPerson > 64 && ageOfPerson <= 122){
                console.log(12 + "$");
            }
            else {
                console.log("Error!");
            }
            break;
        case "Weekend":
            if (ageOfPerson >= 0 && ageOfPerson <= 18){
                console.log(15 + "$");
            }
            else if (ageOfPerson > 18 && ageOfPerson <= 64){
                console.log(20 + "$");
            }
            else if (ageOfPerson > 64 && ageOfPerson <= 122){
                console.log(15 + "$");
            }
            else {
                console.log("Error!");
            }
            break;
        case "Holiday":
            if (ageOfPerson >= 0 && ageOfPerson <= 18){
                console.log(5 + "$");
            }
            else if (ageOfPerson > 18 && ageOfPerson <= 64){
                console.log(12 + "$");
            }
            else if (ageOfPerson > 64 && ageOfPerson <= 122){
                console.log(10 + "$");
            }
            else {
                console.log("Error!");
            }
            break;
    }
}