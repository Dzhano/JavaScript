function arrayManipulator(numbers, commands){
    for (let command of commands){
        command = command.split(' ');

        let order = command.shift();
        let indexes = command.map(Number);

        switch(order){
            case "add":
                numbers.splice(indexes[0], 0, indexes[1]);
                break;
            case "addMany":
                let place = indexes.shift();
                for (let i = 0; i < indexes.length; i++){
                    numbers.splice(place, 0, indexes[i]);
                    place++;
                }
                break;
            case "contains":
                console.log(numbers.indexOf(indexes[0]));
                break;
            case "remove":
                numbers.splice(indexes[0], 1);
                break;
            case "shift":
                for (let i = 0; i < indexes[0]; i++){
                    let number = numbers.shift();
                    numbers.push(number);
                }
                break;
            case "sumPairs":
                let newNumbers = [];
                let y = 0;
                for (let i = 0; i < numbers.length; i += 2){
                    newNumbers[y] = numbers[i] + numbers[i + 1];
                    y++;
                }
                numbers = newNumbers;
                break;
            case "print":
                let result = [];
                result += "[ ";
                result += numbers.join(", ");
                result += " ]";
                console.log(result);
                break;
        }
    }
}

// arrayManipulator([1, 2, 3, 4, 5], ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]);