function schoolGrades(input){
    let students = {};

    for (let line of input){
        let data = line.split(' ');
        let name = data.shift();
        let grades = data.map(Number);
        if (Object.keys(students).includes(name)) {
            students[name].push(...grades);
        } else {
            students[name] = grades;
        }
    }

    let sorted = Object.entries(students);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let student of sorted) {
        let average = 0;
        for (let i = 0; i < student[1].length; i++){
            average += student[1][i];
        }
        average /= student[1].length;
        console.log(`${student[0]}: ${average.toFixed(2)}`);
    }
}

// schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
// schoolGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);