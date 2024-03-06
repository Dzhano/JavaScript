function topInteger(numbers){
    let tops = [];
    for (let i = 0; i < numbers.length; i++){
        let top = true;
        for (let y = i + 1; y < numbers.length; y++){
            if (numbers[i] <= numbers[y]){
                top = false;
            }
        }
        if (top) { tops.push(numbers[i]); }
    }
    console.log(tops.join(" "));
}

// topInteger([41, 41, 34, 20]);