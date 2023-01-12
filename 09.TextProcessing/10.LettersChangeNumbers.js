function lettersChangeNumbers(input){
    let strings = input.split(' ').filter(s => s);
    let sum = 0;
    for (let string of strings){
        let firstLetter = string[0];
        let lastLetter = string[string.length - 1];
        let number = Number(string.substring(1, string.length - 1));
        
        if (/^[A-Z]*$/.test(firstLetter)){
            number /= (firstLetter.charCodeAt() - 64);
        } else {
            number *= (firstLetter.charCodeAt() - 96);
        }

        if (/^[A-Z]*$/.test(lastLetter)){
            number -= (lastLetter.charCodeAt() - 64);
        } else {
            number += (lastLetter.charCodeAt() - 96);
        }

        sum += number;
    }
    console.log(sum.toFixed(2));
}

// lettersChangeNumbers('A12b s17G');
// lettersChangeNumbers('P34562Z q2576f   H456z');
// lettersChangeNumbers('a1A');