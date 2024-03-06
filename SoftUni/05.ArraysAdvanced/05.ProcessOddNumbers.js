function ProcessOddNumbers(array){
    console.log(array.filter((v, i) => (i % 2) != 0)
                    .map(x => x * 2)
                    .reverse())
                    .join(' ');
}

// ProcessOddNumbers([10, 15, 20, 25]);