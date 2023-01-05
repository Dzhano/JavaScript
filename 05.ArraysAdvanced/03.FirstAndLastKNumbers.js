function FirstAndLastKNumbers(input){
    let k = input[0];
    
    console.log(input.slice(1, k + 1).join(' '));
    console.log(input.slice(input.length - k, input.length).join(' '));
}

// FirstAndLastKNumbers([3, 6, 7, 8, 9]);