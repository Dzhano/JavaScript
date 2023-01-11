function oddOccurrences(input){
    let strings = input.split(' ');
    let words = new Map();

    for (let word of strings){
        let string = word.toLowerCase();
        if (words.has(string)) {
            let newTimes = words.get(string) + 1;
            words.set(string, newTimes);
        } else {
            words.set(string, 1);
        }
    }

    let sorted = Array.from(words).filter(a => a[1] % 2 != 0);
    let output = "";
    sorted.forEach(a => output += a[0] + " ");
    console.log(output);
}

/* oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food'); */