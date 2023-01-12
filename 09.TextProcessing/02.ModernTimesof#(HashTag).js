function hashTag(input){
    let specialWords = input.split(' ').filter(c => c.includes('#') && c.length > 1);
    for (let word of specialWords){
        let string = word.substring(1, word.length);
        if (/^[A-Za-z]*$/.test(string)){ console.log(string);}
    }
}

// hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');