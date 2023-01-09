function searchForANumber(numbers, input){
    if (numbers.length > input[0]){
        numbers = numbers.slice(0, input[0]);
    }

    numbers.splice(0, input[1]);

    let times = 0;
    let index = numbers.indexOf(input[2]);
    while (index !== -1){
        times++;
        index = numbers.indexOf(input[2], index + 1);
    }

    console.log(`Number ${input[2]} occurs ${times} times.`);
}

// searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);