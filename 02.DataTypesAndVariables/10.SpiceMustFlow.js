function spiceMine(yield){
    let days = 0;
    let extractedSpice = 0;

    while (yield >= 100){
        extractedSpice += yield;
        if (extractedSpice >= 26) {
            extractedSpice -= 26;
        } 
        days++;
        yield -= 10;
    }
    if (extractedSpice >= 26) {
            extractedSpice -= 26;
        } 
    
    console.log(days);
    console.log(extractedSpice);
}