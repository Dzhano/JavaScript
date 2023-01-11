function wordOccurences(strings){
    let words = new Map();

    for (let string of strings){
        if (words.has(string)) {
            let newTimes = words.get(string) + 1;
            words.set(string, newTimes);
        } else {
            words.set(string, 1);
        }
    }

    let sorted = Array.from(words).sort((a, b) => b[1] - a[1]);
    for (let word of sorted) {
        console.log(`${word[0]} -> ${word[1]} times`);
    }
}

/* wordOccurences(["Here", "is", "the", "first", "sentence", 
                "Here", "is", "another", "sentence", 
                "And", "finally", "the", "third", "sentence"]); */