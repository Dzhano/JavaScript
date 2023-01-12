function revealWords(searching, text){
    let words = searching.split(', ');

    for (let word of words){
        let censored = '*'.repeat(word.length);
        text = text.replace(censored, word);
    }

    console.log(text);
}

// revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');