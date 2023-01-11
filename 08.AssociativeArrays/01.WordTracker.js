function wordTracker(strings){
    let words = new Map();
    let looking = strings.shift().split(' ');
    for (let string of looking){
        words.set(string, 0);
    }
    
    for (let string of strings){
        if (words.has(string)) {
            let newTimes = words.get(string) + 1;
            words.set(string, newTimes);
        }
    }

    let sorted = Array.from(words).sort((a, b) => b[1] - a[1]);
    for (let word of sorted) {
        console.log(`${word[0]} - ${word[1]}`);
  }
}

/* wordTracker(['this sentence', 
            'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']); */