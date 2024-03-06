function pascalCaseSplitter(string) {
    let output = [];
    let start = 0;
    let i;
    for (i = 1; i < string.length; i++){
        if (/^[A-Z]*$/.test(string[i])){ 
            let word = string.substring(start, i);
            output.push(word);
            start = i;
        }
    }
    output.push(string.substring(start, i));
    console.log(output.join(', '));
}

// pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
// pascalCaseSplitter('HoldTheDoor');
// pascalCaseSplitter('ThisIsSoAnnoyingToDo');