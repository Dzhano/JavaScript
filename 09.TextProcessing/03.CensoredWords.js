function censoredWords(text, word){
    let censored = text.replace(word, repeat(word));

    while (censored.includes(word)){
        censored = censored.replace(word, repeat(word));
    }

    console.log(censored);

    function repeat(input){
        return '*'.repeat(input.length);
    }
}

// censoredWords('A small sentence with some words', 'small');