function solve(input){
    let meetings = [];
    for (let line of input) {
        let [day, name] = line.split(' ');
        if (meetings.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
  }
}

// solve(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);