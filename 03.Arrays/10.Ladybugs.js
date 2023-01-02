function ladybugs(input){
    let cellCount = input[0];
    let ladybugsPlaces = input[1].split(" ").map(Number);

    let cells = [];
    for (let i = 0; i < cellCount; i++){
        if (ladybugsPlaces.includes(i)){
            cells.push(1);
        } else {
            cells.push(0);
        }
    }

    for (let i = 2; i < input.length; i++){
        let commands = input[i].split(" ");
        let ladybugIndex = Number(commands[0]);
        if (ladybugIndex >= 0 && ladybugIndex < cells.length){
            if (cells[ladybugIndex] == 1){
                let newIndex = 0;
                switch (commands[1]){
                    case "left":
                        newIndex = ladybugIndex - Number(commands[2]);
                        break;
                    case "right":
                        newIndex = ladybugIndex + Number(commands[2]);
                        break;
                }
                cells[ladybugIndex] = 0;
                while (newIndex >= 0 && newIndex < cells.length){
                    if (cells[newIndex] == 1){
                        switch (commands[1]){
                            case "left":
                                newIndex -= 1;
                                break;
                            case "right":
                                newIndex += 1;
                                break;
                        }
                    }
                    else {
                        cells[newIndex] = 1;
                        break;
                    }
                }          
            }
        }
    }

    console.log(cells.join(" "));
}

// ladybugs([5, '3', '3 left 2', '1 left -2']);