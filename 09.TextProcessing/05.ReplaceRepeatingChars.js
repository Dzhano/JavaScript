function repeatingChars(string){
    let chars = string.split('');
    for (let i = 0; i < chars.length; i++){
        if (chars[i] == chars[i + 1]){
            chars.splice(i + 1, 1);
            i--;
        }
    }
    console.log(chars.join(''));
}

// repeatingChars('aaaaabbbbbcdddeeeedssaa');
// repeatingChars('qqqwerqwecccwd');