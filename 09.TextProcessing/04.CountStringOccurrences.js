function countStringOccurrences(string, word){
    console.log(string.split(' ').filter(w => w == word).length);
    // This solution is from our professor. A lot simpler but with the same efficiency ;)
}