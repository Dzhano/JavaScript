function maxSequence(numbers){
    let result = [];
    for (let i = 0; i < numbers.length; i++){
        let currentSequence = [numbers[i]];
        for (let y = i + 1; y < numbers.length; y++){
            if (numbers[i] === numbers[y]){
                currentSequence.push(numbers[y]);
            }
            else { break; }
        }
        
        if (result.length < currentSequence.length){
            result = currentSequence;
        }
    }

    console.log(result.join(' '));
}