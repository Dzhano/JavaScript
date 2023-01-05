function negativeOrPositiveNumbers(input){
    let numbers = [];
    for (let i = 0; i < input.length; i++){
        numbers.push(Number(input[i]));
    }

    let result = [];
    for (let num of numbers){
        if (num < 0){
          result.unshift(num); // Insert at the start
        } else {
          result.push(num);    // Append at the end
        } 
     }
     console.log(result.join('\n'));    
}

// negativeOrPositiveNumbers(['7', '-2', '8', '9']);