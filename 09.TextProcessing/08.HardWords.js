function hardWords(input){
    let letterWords = input[0].split(' ');
    let words = input[1];
    let missed = [];

    for (let word of words){
        let missing = '_'.repeat(word.length);

        if (letterWords.includes(missing)){
            let index = letterWords.indexOf(missing);
            letterWords[index] = word;
        } else { missed.push(word); }
    }

    let letter = letterWords.join(" ");
    for (let word of missed){
        let missing = '_'.repeat(word.length);
        letter = letter.replace(missing, word);
    }

    console.log(letter);
}

/* hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
            ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]); */